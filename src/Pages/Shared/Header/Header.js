import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand className='fw-bold' as={Link} to="/">Consultant Point</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                        {
                            user ?
                                <button onClick={() => signOut(auth)} className='btn btn-link text-decoration-none text-white'>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;