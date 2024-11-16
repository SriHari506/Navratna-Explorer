import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/ongc-logo.png" alt="ONGC Logo" className="logo-img" />
        <div>
          <h1>Oil and Natural Gas Corporation Limited</h1>
          <p>A Maharatna Company</p>
        </div>
      </div>
      <div className="stock-info">
        <p>BSE - 261.30 <br /> 08 November 2024 03:30 PM</p>
        <p>NSE - 261.30 <br /> 08 November 2024 03:30 PM</p>
      </div>
    </header>
  );
}

export default Header;
