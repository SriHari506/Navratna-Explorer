// src/pages/Careers.js
import React, { startTransition } from 'react';
import careersImage from '../assets/images/careers.jpg';


const Careers = () => (
  <div className="page">
    <h2>Careers at EIL</h2>
    <img src={careersImage} alt="Careers" />
    <p>Engineers India Limited (EIL) offers a diverse range of career opportunities. The company hires professionals across various sectors, including engineering, construction, and project management. It is known for offering long-term career growth with competitive benefits and development programs. EIL has specific recruitment for specialized roles, including engineers, architects, and other technical staff. They also invite contractors for enlistment, allowing them to participate in various projects.</p>

  </div>
);

export default Careers;
