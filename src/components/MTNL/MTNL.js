// src/components/MTNL/MTNL.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './MTNL.css'; // Import custom styles
import mtnlLogo from './mtnl-logo.png'; // Update with actual path to the MTNL logo
import Home from './pages/Home';
import Mobile from './pages/Mobile';
import Landline from './pages/Landline';
import Broadband from './pages/Broadband';
import Opportunities from './pages/Opportunities';
import CustomerCare from './pages/CustomerCare';

const MTNLLayout = () => {
  return (
    <div className="mtnl-page">
      {/* MTNL Header */}
      <div className="mtnl-header text-center py-4">
        <img src={mtnlLogo} alt="MTNL Logo" className="mtnl-logo" />
      </div>

      {/* MTNL Navbar */}
      <nav className="mtnl-navbar">
        <div className="navbar-container">
          <div className="navbar-toggle" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </div>
          <div className="navbar-links">
            <ul className="nav-links">
              <li className="nav-item">
                <Link className="nav-link" to="/mtnl/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mtnl/mobile">Mobile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mtnl/landline">Landline</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mtnl/broadband">Broadband</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mtnl/opportunities">Opportunities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mtnl/customer-care">Customer Care</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="landline" element={<Landline />} />
          <Route path="broadband" element={<Broadband />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="customer-care" element={<CustomerCare />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 MTNL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MTNLLayout;
