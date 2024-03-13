import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
  <div className='navHeader'>
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/projects">Projects </Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
      </ul>
    </nav>
    <h1 className='nav'>Navbar</h1> 
  </div>
  )
}

export default Navbar