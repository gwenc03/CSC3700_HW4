import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import Form from "react-bootstrap/Form";

function CreateProducts(props) {
    const [iid, setIid] = useState ("");
    const [name, setName] = useState ("");
    const [price, setPrice] = useState ("");

    const [ isPending, setIsPending ] = useState(false);
    // const navigate = useNavigate();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const customer = { iid, name, price }
        console.log( `item=`); console.log( item );
        setIsPending( true );
        let URL = "http://localhost:8002/items"
        fetch ( URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(customer)
        }).then(() => {
            console.log ("added a new item")
            setIsPending( false );
            history.push ('/')
        })
    }
    return (
        <div>
            <h2> Products Management</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Name"
                              required
                              value={name}
                              onChange={ (e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price:</Form.Label>
                <Form.Control type="text" placeholder="Price" required
                              value={price}
                              onChange={ (e) => setPrice(e.target.value)}/>
            </Form.Group>
            <ol>
                <li> Name {name}</li>
                <li> Price {price}</li>
            </ol>

        </div>
    );
}

export default CreateProducts;