import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form"

function UpdateCustomer(props) {
    const {id} = useParams();
    let url = `http://localhost:8003/customers/${id}`;
    const [error, setError ] = useState(  null );
    const [ isPending, setIsPending] = useState(true);
    const [values, setValues] = useState( {
        id: id,
        CustomerName: '',
        CustomerEmail: ''
    })

    useEffect( () => {
        console.log("URL->" + url);
        const abortContr = new AbortController();
        fetch(url, {signal: abortContr.signal})
            .then(resp => {
                console.log( `fetch Done->`);
                if (!resp.ok) {
                    throw Error("Cannot fetch URL data for resource")
                }
                return resp.json()
            }).then(data => {
            setIsPending(false);
            setValues({
                ...values,
                CustomerName: data.CustomerName,
                CustomerEmail: data.CustomerEmail
            })

            setError(null);
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

    const handleNameChange = (event) => {
        setValues({...values, CustomerName : event.target.value} );
    };

    const handleEmailChange = (event) => {
        setValues({...values, CustomerEmail : event.target.value} );
    };

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let URL = `http://localhost:8003/customers/${id}`;
        fetch( URL , {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(values)
        }).then(() => {
            console.log("Added new customer");
            setIsPending( false );
            history.push('/customers');
        })
    }

    return (
        <div>
            <h2> Customer Update(V2) for id:{id}</h2>
            {isPending && <div> Loading </div>}
            {error && <div> {error} </div>}
            {values && (
                <div>
                    <Form onSubmit={handleSubmit}  >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder={values.CustomerName}
                                          required
                                          value={values.CustomerName || ''}
                                          onChange={ handleNameChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAuthor">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" placeholder={values.CustomerEmail} required
                                          value={values.CustomerEmail || ''}
                                          onChange={ handleEmailChange}
                            />
                        </Form.Group>

                        {!isPending && <Button variant="primary" type="submit">Submit</Button>}
                        {isPending && <Button disabled variant="primary" type="submit">Adding  Content </Button>}

                    </Form>
                </div>
            )}
        </div>
    );
}

export default UpdateCustomer;