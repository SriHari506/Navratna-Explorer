import React from 'react';
import aboutImage from '../assets/images/about.jpg';
const About = () => {
  return (
    <div className="about">
      <h2>About Engineers India Limited</h2>
      <img src={aboutImage} alt="About" />
      <p>
      Engineers India Limited (EIL) is a Navratna public-sector enterprise established in 1965. It provides engineering consultancy and EPC services to sectors like petroleum, petrochemicals, and fertilizers. EIL supports large infrastructure projects globally, contributing to sustainable development. EIL's recent EngSUI initiative promotes startups in alignment with India’s Startup India program. Its extensive experience and technical expertise make it a leader in the engineering and construction domain.
      </p>
    </div>
  );
};

export default About;