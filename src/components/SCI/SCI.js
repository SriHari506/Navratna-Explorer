import React from "react";
import "./SCI.css";
import { Link } from "react-router-dom";

const SCI = () => {
  return (
    <div className="sci-container">
      {/* Sub Navbar for SCI Page */}
      <nav className="sci-sub-navbar">
        <ul className="sub-nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/opportunities">Opportunities</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* SCI Hero Section */}
      <header className="sci-hero">
        <h2>Shipping Corporation of India Limited (SCI)</h2>
        <p>Leaders in Shipping and Logistics Services</p>
      </header>

      {/* Overview Section */}
      <section className="overview-section">
        <h3>About SCI</h3>
        <p>
          The Shipping Corporation of India Limited (SCI) is India's premier
          shipping company, providing efficient logistics and shipping services
          across the globe. With a vast fleet and a commitment to excellence,
          SCI plays a crucial role in India's maritime industry.
        </p>
      </section>

      {/* Services Section with Sliding Cards */}
      <section className="services-section">
        <h3>Our Services</h3>
        <div className="service-cards">
          <div className="service-card">
            <img src="cargo_ship.jpg" alt="Cargo Shipping" />
            <h4>Cargo Shipping</h4>
            <p>
              Reliable and safe cargo shipping solutions for international
              trade.
            </p>
          </div>
          <div className="service-card">
            <img src="logistics.jpg" alt="Logistics Management" />
            <h4>Logistics Management</h4>
            <p>
              Comprehensive logistics management for efficient supply chains.
            </p>
          </div>
          <div className="service-card">
            <img src="offshore.jpg" alt="Offshore Services" />
            <h4>Offshore Services</h4>
            <p>
              Offshore support and transportation services for oil and gas
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="opportunities-section">
        <h3>Opportunities at SCI</h3>
        <p>
          SCI offers a variety of career paths and growth opportunities for
          individuals interested in the shipping and logistics sector. Join us
          to embark on an exciting career in the maritime industry.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h3>Contact Us</h3>
        <p>Email: info@sci.com | Phone: +91-123-456-7890</p>
        <p>Head Office: Mumbai, Maharashtra, India</p>
      </section>
    </div>
  );
};

export default SCI;
