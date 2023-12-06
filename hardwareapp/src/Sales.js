import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import SalesList from "./SalesList";

function Sales(props) {
    let url = "http://localhost:8003/sales"
    const { data : sales, isPending, error} = useFetch( url )
    return (
        <Row>
            <Col sm={3}>
            </Col>
            <Col sm={3}>
                { error && <div> Error: {error} </div> }
                { isPending && <div> Loading ...</div>}
                { sales && <SalesList sales={sales}/>}
            </Col>
        </Row>
    );
}

export default Sales;