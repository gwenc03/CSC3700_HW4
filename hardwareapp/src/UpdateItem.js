import React, {useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {Button, Form, Table} from "react-bootstrap";

function UpdateItem(props) {
    const {id} = useParams();
    let url = `http://localhost:8003/items/${id}`;
    // const {data: item, error, isPending2} = useFetch(url);
    const [itemName, setItemName] = useState("");
    const [itemTotalSales, setTotalSales] = useState("");
    const [ isPending, setIsPending ] = useState(false);
    const [values, setValues] = useState( {
        id: id,
        ItemName: '',
        TotalSales: ''
    })
    const [error, setError ] = useState(  null );
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {id, itemName, itemTotalSales}
        setIsPending( true );
        let URL = `http://localhost:8003/items${item.id}`;
        fetch( URL , {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        }).then(() => {
            console.log("Added new item");
            setIsPending( false );
            // useHistory.go(-1);
            history.push('/');

        })
    }
    return (
        <div>
            <h2> Item Update for id:{id}</h2>
            { isPending  && <div> Loading </div>}
            { error  && <div> {error} </div>}
            { values  && (
                <div>
                    <h2> Book Details for id={id} </h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Item Name Update:</Form.Label>
                            <Form.Control type="text" placeholder={values.ItemName}
                                          required
                                          value={values.ItemName || ''}
                                          onChange={ (e) => setItemName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAuthor">
                            <Form.Label> Total Sales: </Form.Label>
                            <Form.Control type="text" placeholder={values.TotalSales}
                                          value={values.TotalSales || ''}
                                          onChange={ (e) => setTotalSales(e.target.value)}/>
                        </Form.Group>
                        {!isPending && <Button variant="primary" type="submit">Submit</Button>}
                        {isPending && <Button disabled variant="primary" type="submit">Adding  Content </Button>}
                        {/*{isPending ? <Button variant="primary" type="submit">Submit</Button>*/}
                        {/*    : <Button disabled variant="primary" type="submit">Adding  Content </Button>}*/}

                    </Form>

                    <Link to="/"> Back Home </Link>
                </div>
            )}
        </div>
    );
}

export default UpdateItem;