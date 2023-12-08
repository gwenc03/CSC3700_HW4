<<<<<<< Updated upstream
import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
=======
import {Table} from "react-bootstrap";

import {Link, useHistory, useParams} from "react-router-dom";

import React from 'react';
import customers from "./customers";
import useFetch from "./useFetch";
>>>>>>> Stashed changes

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
                // history.push('/customers');
            })
            .catch((error) => {
                console.error('Error deleting customer:', error);
                // Handle error state if needed
            });
    };
<<<<<<< Updated upstream

=======
    const history = useHistory();
    const {id} = useParams();
    let url = `http://localhost:8003/customers/${id}`;
    const { data: customer, error, isPending} = useFetch(url)

    const handleClick = () => {
        let URL = `http://localhost:8003/customers/${customer.id}`;
        fetch(URL, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }
>>>>>>> Stashed changes

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
                                <Link to={`/customers/${customer.CustomerID}`}> Update {customer.CustomerID}</Link>
                            </td>
<<<<<<< Updated upstream
                            <td> <Button onClick={() => handleClick(customer)}> Delete {customer.CustomerID}  </Button></td>
=======
                            <td>
                                <Link to={`/customers/${customers.CustomerID}`}> Update {customers.CustomerID}</Link>
                            </td>
>>>>>>> Stashed changes
                        </tr>
                    )
                )}
                </tbody>
            </Table>
            <Link to={'/createcustomer'}> Create New Customer </Link>
        </div>

    );
}

export default CustomersList;