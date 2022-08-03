import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Albumes">Música</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Albumes">Albumes</Nav.Link>
            <Nav.Link href="#Singles">Singles</Nav.Link>
            <Nav.Link href="#Artistas">Artistas</Nav.Link>
            <Nav.Link href="#Carrito"><CartWidget numero={4}/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar