import React from 'react'
import './navbar.css'
import { Outlet, Link } from "react-router-dom";
const Navbars = () => {
  
  return (
    
    <div className="Nav-container">
     <div className='nav'>
      <div className="logo">
        <Link to="/Home">
        <span id='cmplogo'>Agroculture</span>
        </Link>
      </div>
      <div className="list-items">
        <ul className='list'>
          <Link to="/Home">
            <a href="#">Home</a>
          </Link>
          <Link to="/about">
            <a href="#">about</a>
          </Link>
          <Link to="/Contact">
            <a href="#">Contact</a>
          </Link>
          <Link to="/RegisterPage">
            <a href="#">Register</a>
          </Link>
          <Link to="/Login">
            <a href="#">Login</a>
          </Link>
        </ul>
      </div>
      </div>
    </div>
    
  );
}

export default Navbars