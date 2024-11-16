// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import BEL from './components/BEL/BEL';
import CONCOR from './components/CONCOR';
import MTNL from './components/MTNL/MTNL';
import NBCC from './components/NBCC/NBCC-Home';  // NBCC Component import
import './App.css';
import RVNL from './components/RVNL/RVNL';
import ONGC from './components/ONGC/ONGC';
import EIL from './components/EIL/EIL';
import NLC from './components/NLC/NLC';
import NMDC from './components/NMDC/NMDC';
import RINL from './components/RINL/RINL';
import SCI from './components/SCI/SCI';
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1 className="title">Navratna Explorer</h1>
          <input 
            type="text" 
            placeholder="Search..." 
            className="searchbar" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-home">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <button onClick={toggleDropdown} className="companies-button">
                <i className="fas fa-building"></i> Companies
              </button>
              {dropdownOpen && (
                <ul className="dropdown">
                  <li><Link to="/BEL">BEL</Link></li>
                  <li><Link to="/CONCOR">CONCOR</Link></li>
                  <li><Link to="/eil">EIL</Link></li>
                  <li><Link to="/national-aluminium-company-limited-nalco">NALCO</Link></li>
                  <li><Link to="/mtnl/home">MTNL</Link></li>
                  <li><Link to="/nbcc/home">NBCC</Link></li> {/* NBCC Added */}
                  <li><Link to="/nlc">NLC</Link></li>
                  <li><Link to="/nmdc">NMDC</Link></li>
                  <li><Link to="/rinl">RINL</Link></li>
                  <li><Link to="/sci">SCI</Link></li>
                  <li><Link to="/rvnl">RVNL</Link></li>
                  <li><Link to="/ongc">ONGC</Link></li>
                  <li><Link to="/rashtriya-chemicals-fertilizers-limited-rcf">RCF</Link></li>
                  <li><Link to="/housing-urban-development-corporation-limited-hudco">HUDCO</Link></li>
                  <li><Link to="/indian-renewable-energy-development-agency-limited-ireda">IREDA</Link></li>
                  <li><Link to="/nhpc-limited">NHPC</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/about">
                <i className="fas fa-info-circle"></i> About Us
              </Link>
            </li>
          </ul>
          
        </nav>

        <Routes>
          <Route path="/" element={<Homepage searchTerm={searchTerm} />} />
          <Route path="/about" element={<About />} />
          <Route path="/bel" element={<BEL />} />
          <Route path="/concor" element={<CONCOR />} />
          {/* Updated Route for MTNL */}
          <Route path="/mtnl/*" element={<MTNL />} />
          <Route path="/nbcc/*" element={<NBCC />} /> {/* Route for NBCC */}
          <Route path="/rvnl/*" element={<RVNL />} />
          <Route path="/ongc/*" element={<ONGC />} />
          <Route path="/eil/*" element={<EIL />} />
           <Route path="/nlc/*" element={<NLC />} />
            <Route path="/nmdc/*" element={<NMDC />} />
             <Route path="/rinl/*" element={<RINL />} />
             <Route path="/sci/*" element={<SCI />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
