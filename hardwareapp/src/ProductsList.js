import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";


function ProductsList( { items, title } ) {
    console.log( items )
    const history = useHistory();
    const {id} = useParams();
    let url = `http://localhost:8003/items/${id}`
    // const { data: item, error, isPending} = useFetch(url)
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
                return response.json(); // or response.text(), depending on your server's response
            })
            .then(() => {
                history.go(0);
                // history.push('/customers');
            })
            .catch((error) => {
                console.error('Error deleting item:', error);
                // Handle error state if needed
            });
    };
    const CreateNewItemPage = () => {

    }
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
                                <Link to={`/items/${item.ItemID}`}> Update {item.ItemID}</Link>
                            </td>
                            <td> <Button onClick={() => handleClick(item)}> Delete {item.ItemID}  </Button></td>

                        </tr>
                    )
                )}
                </tbody>
            </Table>
            <Link to={'/createitem'}> Create New Item </Link>
        </div>
    );
}

export default ProductsList;