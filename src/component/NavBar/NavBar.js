import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import "./NavBar.css"

const NavBar = () => {
    return (
        <Navbar className = 'NavBar'>
            <Container fluid className = "navContainer">
                <Row className = 'col-12'>
                    <Col className = 'navBarCol col-sm-9'>
                        <Navbar.Brand href = '/topalamachette' className = 'navBarBrand'>Top à la machette</Navbar.Brand>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default NavBar;