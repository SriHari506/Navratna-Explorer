import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';

import BEL from './components/BEL';
import CONCOR from './components/CONCOR';
import MTNL from './components/MTNL/MTNL';
import './App.css';

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
          <h1 className="title">Navratna Companies</h1>
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
                  <li><Link to="/engineers-india-limited-eil">EIL</Link></li>
                  <li><Link to="/national-aluminium-company-limited-nalco">NALCO</Link></li>
                  <li><Link to="/mtnl">MTNL</Link></li>
                  <li><Link to="/national-buildings-construction-corporation-limited-nbcc">NBCC</Link></li>
                  <li><Link to="/neyveli-lignite-corporation-limited-nlc">NLC</Link></li>
                  <li><Link to="/nmdc-limited">NMDC</Link></li>
                  <li><Link to="/rashtriya-ispat-nigam-limited-rinl">RINL</Link></li>
                  <li><Link to="/shipping-corporation-of-india-limited-sci">SCI</Link></li>
                  <li><Link to="/rail-vikas-nigam-limited-rvnl">RVNL</Link></li>
                  <li><Link to="/ongc-videsh-ltd">ONGC</Link></li>
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
