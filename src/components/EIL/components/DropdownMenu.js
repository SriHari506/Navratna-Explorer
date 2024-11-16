import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div 
      className="dropdown"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <span className="dropdown-title">More</span>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/about" className="dropdown-item">About EIL</Link>
          <Link to="/business" className="dropdown-item">Businesses</Link>
          <Link to="/services" className="dropdown-item">Services</Link>
          <Link to="/careers" className="dropdown-item">Careers</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;