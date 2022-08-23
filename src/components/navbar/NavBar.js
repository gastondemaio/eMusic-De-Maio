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
          <NavLink to="/categoria/album">Albumes</NavLink>
          <NavLink to="/categoria/sencillo">Singles</NavLink>
          <NavLink to="/cart"><CartWidget numero={4}/></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar