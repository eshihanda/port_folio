import React from 'react'
import {Navbar, Nav, Container, NavbarCollapse} from 'react-bootstrap';
import './Styles/Header.css'

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#3377afc7' }} variant="dark" expand="lg" sticky="top" className='custom-navbar'>
        <Container>
            <Navbar.Brand style={{ color: '#1500d4' }} href="#">Monica Eshihanda</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar'/>
            <NavbarCollapse id='navbar'>
                <Nav className='ms-3'>
                    <Nav.Link href='about'>About</Nav.Link>
                    <Nav.Link href='projects'>Projects</Nav.Link>
                    <Nav.Link href='contact'>Contact</Nav.Link>
                </Nav>
            </NavbarCollapse>
        </Container>
    </Navbar>
  )
}

export default Header
