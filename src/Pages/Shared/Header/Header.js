import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar className='navbar' collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand className='nayem text-white fs-1' href="#home">Nayem Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white fw-bolder fs-5' href="home#about">About</Nav.Link>
                            <Nav.Link className='text-white fw-bolder fs-5' href="home#blogs">Blogs</Nav.Link>
                            <Nav.Link className='text-white fw-bolder fs-5' eventKey={2} href="home#login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;