import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/categoria/album">Albumes</NavLink></li>
        <li><NavLink to="/categoria/sencillo">Singles</NavLink></li>
        <li><NavLink to="/cart"><CartWidget/></NavLink></li>
      </ul>
    </div>
    </>
  )
}

export default NavBar