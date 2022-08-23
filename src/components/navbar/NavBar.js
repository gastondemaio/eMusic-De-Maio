import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/">Música</NavLink>
          <Nav className="me-auto">
          <Nav.Link><NavLink to="/categoria/album">Albumes</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/categoria/sencillo">Singles</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/cart"><CartWidget/></NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar