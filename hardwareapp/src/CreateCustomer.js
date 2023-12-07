import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Button, Col, Form, Row} from "react-bootstrap";

function CreateCustomer(props) {
    const [CustomerName, setCustomerName] = useState('');
    const [CustomerEmail, setCustomerEmail] = useState('');
    const history = useHistory();
    const [ isPending, setIsPending ] = useState(false);
    const submitNewItem = (e) => {
        e.preventDefault();
        const customer = {CustomerName, CustomerEmail};
        setIsPending(true);
        console.log("inside submit new customer");
        console.log(customer);
        fetch('http://localhost:8003/customers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customer)
        }).then(() => {
            console.log("Added new customer");
            setIsPending(false);
            history.push('/customers')
        }).catch((err) => {
            console.log('Error adding new item:', err)
            setIsPending(false);
        })

    }
    const handleCustomerNameChange = (e) => {
        setCustomerName(e.target.value);
    }
    const handleCustomerEmailChange = (e) => {
        setCustomerEmail(e.target.value);
    }
    return (
        <div>
            <Row>
                <Col sm={1}>
                </Col>
                <Col sm={10}>
                    <h2> Create a New Customer </h2>
                    <Form onSubmit = {submitNewItem}>
                        <Form.Group className = 'mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type = 'text'
                                name = 'name'
                                value = {CustomerName}
                                onChange = {handleCustomerNameChange} />

                        </Form.Group>
                        <Form.Group className = 'mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type = 'text'
                                name = 'email'
                                value = {CustomerEmail}
                                onChange = {handleCustomerEmailChange} />

                        </Form.Group>
                        {!isPending && <Button variant="primary" type="submit">Submit</Button>}
                    </Form>
                </Col>
            </Row>

        </div>
    );
}

export default CreateCustomer;