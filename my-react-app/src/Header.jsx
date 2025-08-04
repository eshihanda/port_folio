import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import './Styles/Header.css'

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" sticky="top" className='custom-navbar'>
        <Container>
            <Navbar.Brand style={{ color: 'white' }} href="#">Monica Eshihanda</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar'/>
            <Navbar.Collapse id='navbar'>
                <Nav className='ms-3 fw-bold'>
                    <Nav.Link href='#about'>About</Nav.Link>
                    <Nav.Link href='#projects'>Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header