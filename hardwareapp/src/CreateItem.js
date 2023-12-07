import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

function CreateItem(props) {
    const [ItemName, setItemName] = useState('');
    const [ItemPrice, setItemPrice] = useState('');
    const history = useHistory();
    const [ isPending, setIsPending ] = useState(false);
    const submitNewItem = (e) => {
        e.preventDefault();
        const item = {ItemName, ItemPrice};
        setIsPending(true);
        console.log("inside submit new item");
        console.log(item);
        fetch('http://localhost:8003/items', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(item)
        }).then(() => {
            console.log("Added new item");
            setIsPending(false);
            history.push('/products')
        }).catch((err) => {
            console.log('Error adding new item:', err)
            setIsPending(false);
        })

    }
    const handleItemNameChange = (e) => {
        setItemName(e.target.value);
    }
    const handleItemPriceChange = (e) => {
        setItemPrice(e.target.value);
    }
    return (
        <div>
            <Row>
                <Col sm={1}>
                </Col>
                <Col sm={10}>
                    <h2> Inside create new item </h2>
                    <Form onSubmit = {submitNewItem}>
                        <Form.Group className = 'mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type = 'text'
                                name = 'name'
                                value = {ItemName}
                                onChange = {handleItemNameChange} />

                        </Form.Group>
                        <Form.Group className = 'mb-3'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type = 'text'
                                name = 'price'
                                value = {ItemPrice}
                                onChange = {handleItemPriceChange} />

                        </Form.Group>
                        {!isPending && <Button variant="primary" type="submit">Submit</Button>}
                    </Form>
                </Col>
            </Row>

        </div>
    );
}

export default CreateItem;