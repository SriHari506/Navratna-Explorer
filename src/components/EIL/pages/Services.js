// src/pages/Services.js
import React from 'react';
import servicesImage from '../assets/images/services.jpg';

const Services = () => (
  <div className="page">
    <h2>Our Services</h2>
    <img src={servicesImage} alt="Services" />
    <p>Engineers India Limited (EIL) is a premier engineering consultancy and project management firm under India’s Ministry of Petroleum and Natural Gas, offering comprehensive services:

Consultancy: Project planning, feasibility studies, environmental assessments, and reports, especially for the energy sector.

1.Engineering, Procurement, and Construction Management (EPCM): End-to-end project solutions, covering design, material procurement, and construction.

2.Project Management: Ensures efficient project execution, cost control, and risk mitigation.

3.Turnkey Projects: Complete project delivery, from design through commissioning, for ready-to-operate solutions.

4.Specialized Services: Includes energy audits, safety studies, plant reliability analysis, and facility upgrades.

5.R&D: Focused on hydrocarbon processing, renewable energy, and environmental technology.

EIL plays a key role in India’s industrial growth, with expertise in oil, gas, petrochemicals, and other critical infrastructure sectors.</p>
  </div>
);

export default Services;