// src/pages/Business.js
import React from 'react';
import businessImage from '../assets/images/business.jpg';

const Business = () => (
  <div className="page">
    <h2>Our Businesses</h2>
    <img src={businessImage} alt="Business" />
    <p>Engineers India Limited (EIL) operates in multiple sectors, including petroleum, petrochemicals, fertilizers, and infrastructure. It offers engineering consultancy and EPC services across large-scale projects, both domestically and internationally. EIL also focuses on sustainability and environmental responsibility in its projects. Additionally, it provides specialized services for refining, oil & gas exploration, and energy sectors, contributing significantly to India's economic growth.</p>
  </div>
);

export default Business;