import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import CustomersList from "./CustomersList";
function Customers(props) {
    let url = "http://localhost:8002/customers"
    const { data : customers, isPending, error} = useFetch( url )
    const cTitle = "Customers Management"
    return (
        // <div>
        //    <h2> customers page </h2>
        // </div>
    <Row>
        <Col sm={3}>
        </Col>
        <Col sm={3}>
            { error && <div> Error: {error} </div> }
            {isPending && <div> Loading ...</div>}
            { customers && <CustomersList customers={customers} title={cTitle}/>}
        </Col>
    </Row>
    );
}

export default Customers;