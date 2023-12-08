import React from 'react';
import {Table} from "react-bootstrap";
import {Link} from 'react-router-dom';
import customers from "./customers";

function SalesList({sales, title}) {
    console.log(sales)
    return (
        <div>
            <h2> {title} </h2>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th> Date </th>
                    <th> Customer </th>
                    <th> Product </th>
                    <th> Quantity </th>
                    <th> Total Sales </th>
                </tr>
                </thead>
                <tbody>
                {sales.map((sales) => (
                        <tr key={sales.SalesID}>
                            <td> {sales.Date}</td>
                            <td> {sales.CustomerName}</td>
                            <td> {sales.Product}</td>
                            <td> {sales.Quantity}</td>
                            <td> {sales.TotalSales}</td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default SalesList;