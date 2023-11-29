import {Table} from "react-bootstrap";

import {Link} from "react-router-dom";

import React from 'react';
import customers from "./customers";

function CustomersList( {customers, cTitle} ) {
    // const customerName = props.name;
    // const customerEmail = props.email;
    // console.log( customerName)
    // console.log( customerEmail)
    console.log( customers )
    const cStyle = {
        width: '70%'
    };
    return (
        <div>
            <h2> {cTitle} </h2>
            <Table striped bordered hover style={cStyle}>
                <thead>
                <tr>
                    <th> Name </th>
                    <th> Email </th>
                </tr>
                </thead>
                <tbody>
                    {customers.map((customers) => (
                        <tr key={customers.CustomerID}>
                            <td> {customers.CustomerName}</td>
                            <td> {customers.CustomerEmail}</td>
                            <td>
                                <Link to={`/editCustomer/${customers.CustomerID}`}> Show {customers.CustomerID}</Link>
                            </td>
                        </tr>
                        )
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default CustomersList;