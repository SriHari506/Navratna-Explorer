// src/components/MTNL/pages/Mobile.js
import React from 'react';
import './Mobile.css';

const Mobile = () => {
  return (
    <div className="mobile-page">
      <h1 className="main-title">MTNL Mobile Services</h1>
      <p className="intro-text">Explore our mobile plans and services, including Prepaid, Postpaid, and International Roaming options.</p>

      {/* Prepaid Plans Section */}
      <section className="plans-section">
        <h2 className="section-title">Prepaid Plans</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Combo STV 102</h3>
            <p>Unlimited calls in Home and Roaming</p>
            <p>Price: ₹102</p>
            <button className="cta-button">Learn More</button>
          </div>
          <div className="card">
            <h3>Combo STV 153</h3>
            <p>1 GB Data per day for 30 Days</p>
            <p>Price: ₹153</p>
            <button className="cta-button">Learn More</button>
          </div>
          <div className="card">
            <h3>Combo STV 298</h3>
            <p>1 GB Data per day for 56 Days</p>
            <p>Price: ₹298</p>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </section>

      {/* Postpaid Plans Section */}
      <section className="plans-section">
        <h2 className="section-title">Postpaid Plans</h2>
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-header">
              <h3>3G Postpaid Base Plans</h3>
            </div>
            <div className="accordion-content">
              <p>
                Enter the whole new world of mobile telephony and experience things that existed only in imagination till now. MTNL brings the future of mobile telephony with the launch of state-of-the-art "MTNL 3G Jadoo" services in Mumbai.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <h3>Video Calling</h3>
            </div>
            <div className="accordion-content">
              <p>Enjoy face-to-face conversations with your loved ones or business partners through MTNL’s video calling service.</p>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <h3>High-Speed Broadband Internet</h3>
            </div>
            <div className="accordion-content">
              <p>Get high-speed internet on your mobile anytime, anywhere with MTNL 3G data cards.</p>
            </div>
          </div>
        </div>

        <h3 className="section-title">3G Postpaid Data Plans</h3>
        <div className="slider-container">
          <h4>Data Plan Price Range</h4>
          <input type="range" min="0" max="3000" step="100" className="slider" />
          <p>Adjust the slider to view plans based on price.</p>
        </div>

        <div className="plans-table-container">
          <table className="plans-table">
            <thead>
              <tr>
                <th>Data Plan</th>
                <th>Monthly Charges (Rs.)</th>
                <th>Free Data Usage</th>
                <th>Video Calls</th>
                <th>Roaming Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3G 99</td>
                <td>99</td>
                <td>1.5 GB</td>
                <td>None</td>
                <td>Data charges apply after 1.5 GB</td>
              </tr>
              <tr>
                <td>3G 152</td>
                <td>152</td>
                <td>5 GB</td>
                <td>None</td>
                <td>Data charges apply after 5 GB</td>
              </tr>
              <tr>
                <td>3G 299</td>
                <td>299</td>
                <td>10 GB</td>
                <td>100 mins</td>
                <td>Data charges apply after 10 GB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* International Roaming Section */}
      <section className="roaming-section">
        <h2 className="section-title">International Roaming</h2>
        <div className="card">
          <h3>Global Roaming</h3>
          <p>
            Roam seamlessly across more than 100 countries. Stay connected with MTNL's international roaming plans.
          </p>
          <p>Data Roaming - Access the internet at international speeds.</p>
          <p>Voice Roaming - Stay connected with friends and family abroad.</p>
          <button className="cta-button">Activate Roaming</button>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
