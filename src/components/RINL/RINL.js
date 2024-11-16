import React from "react";
import "./RINL.css";
import { Link } from "react-router-dom";

const RINL = () => {
  return (
    <div className="rinl-container">
      {/* Sub Navbar for RINL Page */}
      <nav className="rinl-sub-navbar">
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

      {/* RINL Hero Section */}
      <header className="rinl-hero">
        <h2>Rashtriya Ispat Nigam Limited (RINL)</h2>
        <p>Leading Steel Production Company in India</p>
      </header>

      {/* Overview Section */}
      <section className="overview-section">
        <h3>About RINL</h3>
        <p>
          Rashtriya Ispat Nigam Limited (RINL) is one of India's largest steel
          producers, known for its excellence in quality and sustainability. It
          plays a key role in supporting India's infrastructure development by
          providing high-grade steel products.
        </p>
      </section>

      {/* Product Section with Sliding Cards */}
      <section className="products-section">
        <h3>Our Products</h3>
        <div className="product-cards">
          <div className="product-card">
            <img src="steel1.jpg" alt="Steel Rods" />
            <h4>Steel Rods</h4>
            <p>High-strength steel rods for construction and engineering.</p>
          </div>
          <div className="product-card">
            <img src="steel2.jpg" alt="Steel Coils" />
            <h4>Steel Coils</h4>
            <p>Premium steel coils with superior quality for manufacturing.</p>
          </div>
          <div className="product-card">
            <img src="steel3.jpg" alt="Steel Plates" />
            <h4>Steel Plates</h4>
            <p>Durable steel plates designed for heavy-duty applications.</p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="opportunities-section">
        <h3>Opportunities at RINL</h3>
        <p>
          Join RINL to make a difference in the steel industry and contribute to
          India's industrial growth. Explore careers, internships, and
          professional growth opportunities.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h3>Contact Us</h3>
        <p>Email: info@rinl.com | Phone: +91-123-456-7890</p>
        <p>Head Office: Visakhapatnam, Andhra Pradesh, India</p>
      </section>
    </div>
  );
};

export default RINL;
