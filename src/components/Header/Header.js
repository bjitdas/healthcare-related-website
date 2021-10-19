import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">U-HEALTH</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/techonologies">Equipments</Nav.Link>

                        {user.email ? <button onClick={logOut}>Log Out</button>
                            : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Nav>
                    <Navbar.Text>
                        Logged in as: {user?.displayName}
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;