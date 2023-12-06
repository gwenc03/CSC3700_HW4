import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import Form from "react-bootstrap/Form";
import customers from "./customers";

function CreateSales(props) {
    const [sid, setSid ] = useState("");
    const [salesDate, setSalesDate ] = useState ("");
    const [cname, setCName] = useState ("");
    const [iname, setIName] = useState ("");
    const [quantity, setQuantity ] = useState ("");
    const [totalSales, setTotalSales ] = useState ("");


    const [ isPending, setIsPending ] = useState(false);
    // const navigate = useNavigate();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const sale = { sid, salesDate, cname, iname, quantity, totalSales }
        console.log( `sales=`); console.log( sale );
        setIsPending( true );
        let URL = "http://localhost:8003/sales"
        fetch ( URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(sale)
        }).then(() => {
            console.log ("added a new sale")
            setIsPending( false );
            history.push ('/')
        })
    }

    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicSalesDate">
                <Form.Label>Sales Date:</Form.Label>
                <Form.Control type="text" placeholder="SalesDate" required
                              value={salesDate}
                              onChange={ (e) => setSalesDate(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCName">
                <Form.Label>Customer Name:</Form.Label>
                <Form.Control type="text" placeholder="CName"
                              required
                              value={cname}
                              onChange={ (e) => setCName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicIName">
                <Form.Label>Item Name:</Form.Label>
                <Form.Control type="text" placeholder="IName"
                              required
                              value={iname}
                              onChange={ (e) => setIName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control type="text" placeholder="Quantity"
                              required
                              value={quantity}
                              onChange={ (e) => setQuantity(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTotalSales">
                <Form.Label>Total Sales:</Form.Label>
                <Form.Control type="text" placeholder="TotalSales"
                              required
                              value={totalSales}
                              onChange={ (e) => setTotalSales(e.target.value)}
                />
            </Form.Group>
            <ol>
                <li> SalesDate {salesDate}</li>
                <li> Customer {cname}</li>
                <li> Product {iname}</li>
                <li> Quantity {quantity}</li>
                <li> TotalSales {totalSales}</li>
            </ol>
        </div>
    );
}

export default CreateSales;