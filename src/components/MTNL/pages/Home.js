// src/components/MTNL/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to MTNL</h1>
          <p>Your trusted partner for mobile, broadband, and telecom services in Mumbai & Delhi.</p>
          <button className="cta-btn">Explore Our Services</button>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="services-cards">
          <div className="service-card">
            <h3>Mobile Services</h3>
            <p>Explore our prepaid and postpaid plans, 3G & 4G services.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="service-card">
            <h3>Broadband & Internet</h3>
            <p>Fast, reliable internet plans for home and business.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="service-card">
            <h3>International Roaming</h3>
            <p>Stay connected while you travel with our affordable roaming plans.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="promotions-section">
        <h2>Special Offers</h2>
        <div className="promo-slider">
          <div className="promo-slide">Get 50% off on your first broadband bill!</div>
          <div className="promo-slide">Exclusive mobile plan offers for new customers!</div>
          <div className="promo-slide">Limited time: 3GB free data on all postpaid plans!</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <p>"MTNL's broadband service has been super fast and reliable. Highly recommended!"</p>
            <p>- Aditi R.</p>
          </div>
          <div className="testimonial-card">
            <p>"I love the 3G services. Never had a better experience with mobile data!"</p>
            <p>- Rajesh K.</p>
          </div>
          <div className="testimonial-card">
            <p>"Affordable international roaming plans. Excellent for frequent travelers!"</p>
            <p>- Priya M.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 MTNL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
