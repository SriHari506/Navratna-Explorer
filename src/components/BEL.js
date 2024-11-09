import React from 'react';
import './BEL.css';
import { colors } from '@mui/material';

const BELPage = () => (
  <div className="bel-page">
    {/* Hero Section */}
    <section className="hero bel-hero">
      <h1 className="belTitle">BHARAT ELECTRONIC LIMITED (BEL)</h1>
      <p>Excellence in Defense and Aerospace Electronics</p>
    </section>

    {/* About Section */}
    <section className="section about">
      <h2>About Us</h2>
      <p>BEL is India’s leading defense electronics company, delivering high-quality solutions for government and defense needs.</p>
    </section>

    {/* Services Section */}
    <section className="section services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">Electronic Warfare Systems</div>
        <div className="card">Radar & Fire Control Systems</div>
        <div className="card">Communication Systems</div>
      </div>
    </section>

    {/* News Section */}
    <section className="section news">
      <h2>Latest News</h2>
      <div className="news-item">BEL wins award for Excellence in Defense Systems</div>
      <div className="news-item">New Radar System deployed for national security</div>
    </section>

    {/* Contact Section */}
    <section className="section contact">
      <h2>Contact Us</h2>
      <p>Visit our official site: <a href="https://bel-india.in" target="_blank" rel="noopener noreferrer">BEL Official Site</a></p>
    </section>
  </div>
);

export default BELPage;
