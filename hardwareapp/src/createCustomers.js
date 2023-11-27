import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import Form from 'react-bootstrap/Form'

function CreateCustomers(props) {
    const [cid, setCid] = useState ("");
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    // const [nameTitle, setNTitle] = useState("Name")
    // const [emailTitle, setETitle] = useState("Email")

    const [ isPending, setIsPending ] = useState(false);
    // const navigate = useNavigate();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const customer = { cid, name, email }
        console.log( `customer=`); console.log( customer );
        setIsPending( true );
        let URL = "http://localhost:8002/customers"
        fetch ( URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(customer)
        }).then(() => {
            console.log ("added a new customer")
            setIsPending( false );
            history.push ('/')
        })
    }

    return (
        <div>
            <h2> Customers Management</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Name"
                              required
                              value={name}
                              onChange={ (e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author:</Form.Label>
                <Form.Control type="text" placeholder="Email" required
                              value={email}
                              onChange={ (e) => setEmail(e.target.value)}/>
            </Form.Group>
            <ol>
                <li> Name {name}</li>
                <li> Email {email}</li>
            </ol>
        </div>
    );
}

export default CreateCustomers;