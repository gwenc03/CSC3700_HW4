import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {Button, Form, Table} from "react-bootstrap";

function UpdateItem(props) {
    const {id} = useParams();
    let url = `http://localhost:8003/items/${id}`;
    const {data: item, error, isPending2} = useFetch(url);
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [ isPending, setIsPending ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {id, itemName, itemPrice}
        setIsPending( true );
        let URL = "http://localhost:8003/items";
        fetch( URL , {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        }).then(() => {
            console.log("Added new blog");
            setIsPending( false );
            // useHistory.go(-1);
            // history.push('/');


        })
    }
    return (
        <div>
            { isPending2  && <div> Loading </div>}
            { error  && <div> {error} </div>}
            { item  && (
                <div>
                    <h2> Book Details for id={id} </h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder={item.ItemName}
                                          required
                                          value={itemName}
                                          onChange={ (e) => setItemName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAuthor">
                            <Form.Label> Price </Form.Label>
                            <Form.Control type="text" placeholder={item.ItemPrice} required
                                          value={itemPrice}
                                          onChange={ (e) => setItemPrice(e.target.value)}/>
                        </Form.Group>
                        {!isPending && <Button variant="primary" type="submit">Submit</Button>}
                        {isPending && <Button disabled variant="primary" type="submit">Adding  Content </Button>}
                        {isPending ? <Button variant="primary" type="submit">Submit</Button>
                            : <Button disabled variant="primary" type="submit">Adding  Content </Button>}

                    </Form>

                    <Link to="/"> Back Home </Link>
                </div>
            )}
        </div>
    );
}

export default UpdateItem;