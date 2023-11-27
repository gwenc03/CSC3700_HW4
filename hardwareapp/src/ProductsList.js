import React from 'react';
import {Table} from "react-bootstrap";

function ProductsList( { items, pTitle } ) {
    console.log( items )
    return (
        <div>
            <h2> {pTitle} </h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th> Product </th>
                    <th> Total Sales </th>
                </tr>
                </thead>
                <tbody>
                {items.map((items, index) => (
                    <tr key={index}>
                        <td> {items.name}</td>
                        <td> {items.price}</td>
                    </tr>
                    )
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default ProductsList;