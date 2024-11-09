// src/components/CONCORPage.js
import React from 'react';
import './CONCOR.css';

const CONCORPage = () => (
  <div className="concor-page">
    {/* Hero Section */}
    <section className="hero concor-hero">
      <h1 className="concorTitle">CONTAINER CORPORATION OF INDIA LIMITED (CONCOR)</h1>
      <p>Leaders in Logistics and Transportation Solutions</p>
    </section>

    {/* About Section */}
    <section className="section about">
      <h2>About Us</h2>
      <p>CONCOR specializes in logistics services, providing efficient solutions for container transportation across India.</p>
    </section>

    {/* Services Section */}
    <section className="section services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">Container Rail Transportation</div>
        <div className="card">Warehousing & Storage</div>
        <div className="card">Domestic and International Logistics</div>
      </div>
    </section>

    {/* News Section */}
    <section className="section news">
      <h2>Latest News</h2>
      <div className="news-item">CONCOR launches new logistics hub in Chennai</div>
      <div className="news-item">Expanded warehousing solutions for North India</div>
    </section>

    {/* Contact Section */}
    <section className="section contact">
      <h2>Contact Us</h2>
      <p>Visit our official site: <a href="https://www.concorindia.com" target="_blank" rel="noopener noreferrer">CONCOR Official Site</a></p>
    </section>
  </div>
);

export default CONCORPage;
