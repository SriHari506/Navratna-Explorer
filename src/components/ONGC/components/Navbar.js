import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-ongc">
      <ul className="nav-list">
        <li>About Us</li>
        <li>Net Zero</li>
        <li>Sustainability</li>
        <li>CSR</li>
        <li>Investors</li>
        <li>Media</li>
        <li>Career</li>
        <li>Pay</li>
      </ul>
      <div className="right-nav">
        <span>Citizen</span>
        <span>Tenders</span>
        <span>हिंदी</span>
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>
    </nav>
  );
}

export default Navbar;
