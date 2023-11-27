import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import ProductsList from "./ProductsList";


function Products(props) {
    let url = "http://localhost:8002/customers"
    const { data : items, isPending, error} = useFetch( url )
    const pTitle = "Products Management"
    return (
        // <div>
        // <h2> Products Page </h2>
        // </div>
        <Row>
            <Col sm={3}>
            </Col>
            <Col sm={3}>
                { error && <div> Error: {error} </div> }
                {isPending && <div> Loading ...</div>}
                { items && <ProductsList items={items} title={pTitle}/>}
            </Col>
        </Row>
    );
}

export default Products;