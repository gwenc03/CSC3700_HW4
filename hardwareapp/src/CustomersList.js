import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";


function CustomersList( { customers, title } ) {
    console.log( customers )
    const history = useHistory();
    const handleClick = (customer) => {
        let URL = `http://localhost:8003/customers/${customer.CustomerID}`;
        console.log('delete url');
        console.log(URL);
        fetch(URL, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to delete customer: ${response.status}`);
                }
                return response.json(); // or response.text(), depending on your server's response
            })
            .then(() => {
                history.go(0);
            })
            .catch((error) => {
                console.error('Error deleting customer:', error);
            });
    };

    const {id} = useParams();
    let url = `http://localhost:8003/customers/${id}`;
    const { data: customer, error, isPending} = useFetch(url)

    return (
        <div>
            <h2> {title} </h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th> Name </th>
                    <th> Email </th>
                    <th> </th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                        <tr key={customer.CustomerID}>
                            <td> {customer.CustomerName}</td>
                            <td> {customer.CustomerEmail}</td> 
                            <td>
                                <Link to={`/customers/${customer.CustomerID}`} className='btn btn-primary'> Update </Link>
                            </td>
                            <td> <Button onClick={() => handleClick(customer)}> Delete  </Button></td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
            <Link to={'/createcustomer'} className='btn btn-primary'> Create New Customer </Link>
        </div>

    );
}

export default CustomersList;