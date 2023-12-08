import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";


function ProductsList( { items, title } ) {
    console.log( items )
    const history = useHistory();
    const {id} = useParams();
    let url = `http://localhost:8003/items/${id}`

    const handleClick = (item) => {
        let URL = `http://localhost:8003/items/${item.ItemID}`;
        console.log('delete url');
        console.log(URL);
        fetch(URL, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to delete item: ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                history.go(0);
            })
            .catch((error) => {
                console.error('Error deleting item:', error);
            });
    };

    return (
        <div>
            <h2> {title} </h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th> Product </th>
                    <th> Total Sales </th>
                    <th> </th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                        <tr key={item.ItemID}>
                            <td> {item.ItemName}</td>
                            <td> {item.TotalSales}</td>

                            <td>
                                <Link to={`/items/${item.ItemID}`} className='btn btn-primary'> Update</Link>
                            </td>
                            <td> <Button onClick={() => handleClick(item)}> Delete </Button></td>

                        </tr>
                    )
                )}
                </tbody>
            </Table>
            <Link to={'/createitem'} className='btn btn-primary'> Create New Item </Link>

        </div>
    );
}

export default ProductsList;