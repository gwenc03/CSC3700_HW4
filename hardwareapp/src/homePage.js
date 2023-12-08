import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import './App.css';
import useFetch from "./useFetch";
import {Link} from "react-router-dom";
import CustomersList from "./CustomersList";

function HomePage(props) {
    let URL = "http://localhost:8001/homepage"
    const {data, isPending, error} = useFetch(URL);
    const customers = Array.isArray(data) ? data : [];
    const formatMonth = (monthString) => {
        const options = {year: 'numeric', month: 'long'};
        const date = new Date(`${monthString}-01`); // Assuming the day is always the 1st
        return date.toLocaleDateString(undefined, options);
    };
    console.log('homepage customers:')

    console.log(customers);

    const cTitle = "Top Customers"
    console.log('homepage data');
    console.log(data);
    return (
        <div className="home">
            <Row style={{ padding: '20px' }}>
                <Col sm={4}>
                    {isPending && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {data && (
                        <div>
                            <h2> Top Customers </h2>
                            <table style={{ width: '100%', textAlign: 'left' }}>
                                <thead>
                                </thead>
                                <tbody>
                                {data.customer.map((c, index) => (
                                    <tr key={index}>
                                        <td> {index + 1}. </td>
                                        <td>{c.CustomerName}  -  ${c.TotalSales}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <Link to='/customers' className='btn btn-primary'> Show All Customers </Link>
                </Col>
                <Col sm={4}>
                    {isPending && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {data && (
                        <div>
                            <h2> Top Products </h2>
                            <table style={{ width: '100%', textAlign: 'left' }}>
                                <thead>
                                </thead>
                                <tbody>
                                {data.items.map((i, index) => (
                                    <tr key={index}>
                                        <td> {index + 1}. </td>
                                        <td>{i.ItemName}  -  ${i.TotalSales}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <Link to='/products' className='btn btn-primary'> Show All Products </Link>

                </Col>
                <Col sm={4}>
                    {isPending && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {data && (
                        <div>
                            <h2> Top Sales by Month </h2>
                            <table style={{ width: '100%', textAlign: 'left' }}>
                                <thead>
                                </thead>
                                <tbody>
                                {data.sales.map((s, index) => (
                                    <tr key={index}>
                                        <td> {index + 1}. </td>
                                        <td>{formatMonth(s.Month)}  -  ${s.TotalSales}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                        </div>
                    )}
                    <Link to='/sales' className='btn btn-primary'> Show All Sales </Link>

                </Col>
            </Row>
        </div>
    );
}

export default HomePage;