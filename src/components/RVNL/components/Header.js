// src/components/Header.js
import React from 'react';
import './Header.css'; // CSS file for styling the header

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="/assets/logo.png" alt="RVNL Logo" className="logo" />
                <h1 className="title-rvnl">Rail Vikas Nigam Limited</h1>
            </div>
            <nav className="nav">
                <a href="#home" className="nav-link">Home</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
