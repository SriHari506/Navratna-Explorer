// src/components/MTNL/MTNL.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './MTNL.css'; // Import custom styles
import mtnlLogo from './mtnl-logo.png'; // Update with actual path to the MTNL logo

// Main MTNL component
const MTNL = () => {
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

// Home Component (Inner Component)
const Home = () => {
  return (
    <div>
      <h1>Welcome to MTNL Home Page</h1>
      <p>Here you can find all the latest services and offers from MTNL.</p>
    </div>
  );
};

// Other Components (as placeholders)
const Mobile = () => <div><h2>Mobile Services</h2><p>Details about MTNL's mobile services.</p></div>;
const Landline = () => <div><h2>Landline Services</h2><p>Details about MTNL's landline services.</p></div>;
const Broadband = () => <div><h2>Broadband Services</h2><p>Details about MTNL's broadband services.</p></div>;
const Opportunities = () => <div><h2>Job Opportunities</h2><p>Explore career opportunities at MTNL.</p></div>;
const CustomerCare = () => <div><h2>Customer Care</h2><p>Get help with MTNL services.</p></div>;

export default MTNL;
