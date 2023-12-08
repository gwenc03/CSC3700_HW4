import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import ProductsList from "./ProductsList";


function Products(props) {
    let url = "http://localhost:8003/items"
    const { data : items, isPending, error} = useFetch( url )
    const pTitle = "Products Management"
    return (
        <Row style={{ padding: '20px' }}>
            <Col sm={1}>
            </Col>
            <Col sm={10}>
                { error && <div> Error: {error} </div> }
                {isPending && <div> Loading ...</div>}
                { items && <ProductsList items={items} title={pTitle}/>}

            </Col>
        </Row>
    );
}

export default Products;