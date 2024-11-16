import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './NBCC-Home.css'; // Import custom styles
import nbccLogo from './pages/nbcc-logo.jpg'; // Update with actual path to the NBCC logo
import Home from './pages/Home'; // Ensure default export in Home.js
import BusinessServices from './pages/BusinessServices'; // Ensure default export in BusinessServices.js
import Media from './pages/Media'; // Ensure default export in Media.js
import Opportunities from './pages/Opportunities'; // Ensure default export in Opportunities.js
import HumanResources from './pages/HumanResources'; // Ensure default export in HumanResources.js

const NBCCLayout = () => {
  return (
    <div className="nbcc-page">
      {/* NBCC Header */}
      <div className="nbcc-header text-center py-4">
        <img src={nbccLogo} alt="NBCC Logo" className="nbcc-logo" />
      </div>

      {/* NBCC Navbar */}
      <nav className="nbcc-navbar">
        <div className="navbar-container">
          <div className="navbar-toggle" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </div>
          <div className="navbar-links">
            <ul className="nav-links">
              <li className="nav-item">
                <Link className="nav-link" to="/nbcc/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nbcc/business-services">Business & Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nbcc/media">Media</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nbcc/opportunities">Opportunities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nbcc/human-resources">Human Resources</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="business-services" element={<BusinessServices />} />
          <Route path="media" element={<Media />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="human-resources" element={<HumanResources />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 NBCC. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NBCCLayout;
