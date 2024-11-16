// src/components/NMDC/NMDC.js

import React from "react";
import "./NMDC.css";

const NMDC = () => {
  return (
    <div className="nmdc-container">
      <div className="nmdc-header">
        <img
          src="/images/nmdc-banner.jpg"
          alt="NMDC Banner"
          className="nmdc-banner"
        />
        <nav className="nmdc-navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#opportunities">Opportunities</a>
            </li>
            <li>
              <a href="#contactus">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <header className="nmdc-hero">
        <h2>NMDC Limited </h2>
        <p>Mining and minerals</p>
      </header>

      <section id="about" className="nmdc-section">
        <h2>About NMDC</h2>
        <p>
          NMDC Limited is India's largest iron ore producer and exporter,
          engaged in mining of iron ore and other minerals. Established in 1958,
          NMDC has been a vital player in the Indian industrial landscape.
        </p>
        <div className="nmdc-card">
          <h3>Key Achievements</h3>
          <ul>
            <li>Leading producer of iron ore in India</li>
            <li>Multiple awards for sustainable mining practices</li>
            <li>Expansion into renewable energy and green initiatives</li>
          </ul>
        </div>
      </section>

      <section id="opportunities" className="nmdc-section">
        <h2>Opportunities</h2>
        <div className="opportunities-slider">
          <div className="opportunity">
            <h3>Engineer Positions</h3>
            <p>
              Apply for engineering roles across multiple projects. NMDC is
              looking for experienced and entry-level engineers to join our
              team.
            </p>
          </div>
          <div className="opportunity">
            <h3>Management Internships</h3>
            <p>
              Opportunities for management students to gain industry experience
              through hands-on internships in various departments.
            </p>
          </div>
          <div className="opportunity">
            <h3>Research & Development</h3>
            <p>
              Join our R&D team to work on innovative solutions for sustainable
              mining and mineral processing.
            </p>
          </div>
        </div>
      </section>

      <section id="contactus" className="nmdc-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>NMDC Limited Headquarters</p>
          <p>
            Address: Khanij Bhavan, Masab Tank, Hyderabad, Telangana 500028,
            India
          </p>
          <p>Email: info@nmdc.co.in</p>
          <p>Phone: +91-40-23538713</p>
        </div>
      </section>
    </div>
  );
};

export default NMDC;
