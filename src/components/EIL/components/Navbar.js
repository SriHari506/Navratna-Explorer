import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/eil-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="EIL Logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About EIL</Link></li>
        <li><Link to="/business">Businesses</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/careers">Careers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;