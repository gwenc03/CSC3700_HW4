import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import SalesList from "./SalesList";

function Sales(props) {
    let url = "http://localhost:8003/sales"
    const { data : sales, isPending, error} = useFetch( url )
    const title = 'Sales Management'
    return (
        <Row  style={{ padding: '20px' }}>
            <Col sm={1}>
            </Col>
            <Col sm={10}>
                { error && <div> Error: {error} </div> }
                { isPending && <div> Loading ...</div>}
                { sales && <SalesList sales={sales} title={title}/>}
            </Col>
        </Row>
    );
}

export default Sales;