import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth);
        navigate('/home');
    }
    return (
        <div id='header'>
            <Navbar className='navbar bg-dark'  collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand className='nayem text-info fs-1' as={Link} to="/">Nayem Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-info fw-bolder fs-5' href='home#services'>Services</Nav.Link>
                            <Nav.Link className='text-info fw-bolder fs-5' as={Link} to="about">About</Nav.Link>
                            <Nav.Link className='text-info fw-bolder fs-5' as={Link} to="blogs">Blogs</Nav.Link>
                            {
                                user ?
                                <button className='s-out border-0 bg-dark text-info p-0 fw-bolder' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link className='text-info fw-bolder fs-5' as={Link} to="login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;