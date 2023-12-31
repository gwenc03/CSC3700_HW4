import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {Button, Form, Table} from "react-bootstrap";

function UpdateItem(props) {
    const {id} = useParams();
    let url = `http://localhost:8003/items/${id}`;
    const [ isPending, setIsPending ] = useState(false);
    const [values, setValues] = useState( {
        id: id,
        ItemName:'',
        ItemPrice: ''
    })
    const [error, setError ] = useState(  null );
    const history = useHistory();

    useEffect( () => {
        console.log("URL->" + url);
        const abortContr = new AbortController();
        fetch(url, {signal:abortContr.signal})
            .then(resp => {
                console.log( `fetch Done->`);
                if (!resp.ok) {
                    throw Error("Cannot fetch URL data for resource")
                }
                return resp.json()
            }).then (data => {
            setIsPending(false);
            setValues({
                ...values,
                ItemName: data.ItemName,
                ItemPrice: data.ItemPrice
            })
        }).catch((err) => {
            if (err.name == 'AbortError') {
                console.log("Udata Fetch Aborted->")
                console.log(err.message);
            } else {
                console.log("Update Error:");
                console.log(err.message);
                setIsPending(false);
                setError(err.message);
            }
        })
    }, [])
    
    const handleItemNameChange = (e) => {
        setValues({...values, ItemName: e.target.value});
    };
    const handleItemPrice =(e) => {
        setValues({...values, ItemPrice: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("item>>>"); console.log(values);
        let URL = `http://localhost:8003/items/${id}`;
        console.log(("itemsURL=>>")); console.log(URL);
        fetch( URL , {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(values)
        }).then(() => {
            console.log("updated new item");
            setIsPending( false );
            history.push('/products');

        })
    }
    return (
        <div>
            <h2> Item Update for id:{id}</h2>
            { isPending  && <div> Loading </div>}
            { error  && <div> {error} </div>}
            { values  && (
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Item Name Update:</Form.Label>
                            <Form.Control type="text" placeholder={values.ItemName}
                                          required
                                          value={values.ItemName || ''}
                                          onChange={ handleItemNameChange }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAuthor">
                            <Form.Label> Item Price: </Form.Label>
                            <Form.Control type="text" placeholder={values.ItemPrice}
                                          value={values.ItemPrice || ''}
                                          onChange={ handleItemPrice}/>
                        </Form.Group>
                        {!isPending && <Button variant="primary" type="submit">Submit</Button>}
                        {isPending && <Button disabled variant="primary" type="submit">Adding  Content </Button>}

                    </Form>
                </div>
            )}
        </div>
    );
}

export default UpdateItem;