// NLC.js
import React from "react";
import "./NLC.css";
import nlcImage from "./nlc-logo.png"; // Placeholder image, replace with an actual image path

const NLC = () => {
  return (
    <div className="nlc-page">
      {/* Company Header */}
      <header className="company-header">
        <img src={nlcImage} alt="NLC Logo" className="company-logo" />
        <h1 className="company-title">
          Neyveli Lignite Corporation Limited (NLC)
        </h1>
      </header>

      {/* NLC Specific Navbar */}
      <nav className="nlc-navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#opportunities">Opportunities</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="nlc-hero">
       {/* <img src={nlcImage} alt="NLC Lignite Mining" />*/}
        <div className="hero-text">
          <h2>Neyveli Lignite Corporation Limited (NLC)</h2>
          <p>Leaders in lignite mining and energy generation in India.</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="nlc-about">
        <h3>About NLC</h3>
        <p>
          Neyveli Lignite Corporation Limited (NLC) is a prominent public sector
          enterprise engaged in lignite mining and power generation. Established
          in 1956, NLC has pioneered eco-friendly mining and has expanded into
          the renewable energy sector, including solar and wind power.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="nlc-services">
        <h3>Our Core Services</h3>
        <div className="service-cards">
          <div className="card">
            <h4>Energy Generation</h4>
            <p>
              NLC generates power through thermal, solar, and wind energy,
              meeting India's growing power demands sustainably.
            </p>
          </div>
          <div className="card">
            <h4>Lignite Mining</h4>
            <p>
              Our lignite mines supply essential raw material for power
              generation, catering to industries across the country.
            </p>
          </div>
          <div className="card">
            <h4>Renewable Energy</h4>
            <p>
              We invest in solar and wind power projects, with a commitment to
              environmental sustainability and carbon reduction.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="nlc-opportunities">
        <h3>Career Opportunities</h3>
        <p>
          Join NLC and be a part of India’s leading lignite mining and energy
          generation company. Explore careers in engineering, operations,
          research, and management.
        </p>
        <button>Explore Opportunities</button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="nlc-contact">
        <h3>Contact Us</h3>
        <p>For any inquiries or information, please reach out to us:</p>
        <ul>
          <li>Email: info@nlcindia.com</li>
          <li>Phone: +91 44 12345678</li>
          <li>Address: Block-1, Neyveli, Tamil Nadu, India</li>
        </ul>
      </section>
    </div>
  );
};

export default NLC;
