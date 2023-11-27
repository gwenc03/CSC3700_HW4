import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function Navs(props) {
    const navStyle = {
        backgroundColor: "salmon",
        margin: "10px"
    };
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Happy Harry's Hardware</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/" style={navStyle}>Home</Nav.Link>
                        <Nav.Link href="/customers" style={navStyle}>Customers</Nav.Link>
                        <Nav.Link href="/products" style={navStyle}>Products</Nav.Link>
                        <Nav.Link href="/sales" style={navStyle}>Sales</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navs;