// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Engineers India Limited. All rights reserved.</p>
    <ul className="footer-links">
      <li><a href="https://www.engineersindia.com/" target="_blank" rel="noopener noreferrer">Official Website</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/careers">Careers</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </footer>
);

export default Footer;