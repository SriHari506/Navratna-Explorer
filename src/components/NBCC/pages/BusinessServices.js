import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessServices.css'; // Import the updated CSS for styles

const BusinessServices = () => {
  return (
    <div className="business-services-container">
      {/* Header */}
      <header className="business-services-header text-center py-5">
        <h1>Business & Services</h1>
        <p>Explore the services we offer to support a variety of industries and government initiatives.</p>
      </header>

      {/* Section for PMC Services */}
      <section className="pmc-services py-5">
        <h2 className="text-center mb-4">Project Management Consultancy (PMC)</h2>
        <p>
          PMC services, which account for 93% of the company's total revenue, involve overseeing the implementation of engineering projects from conceptualization to commissioning. Our experience spans residential housing, health, educational, heritage, social, environmental, and infrastructure sectors. 
          We participate in key government schemes like Smart Cities Mission, Namami Gange, PMGSY, National Health Mission, and more.
        </p>
        <div className="card-container">
          <div className="card">
            <h5 className="card-title">Our Expertise</h5>
            <p className="card-text">
              With experience in diverse sectors, we ensure high-quality and cost-effective project management, focusing on cost, quality, and time.
            </p>
          </div>
          <div className="card">
            <h5 className="card-title">PMC Maintenance Services</h5>
            <p className="card-text">
              Through NBCC Services Ltd (NSL), we provide specialized maintenance services, ensuring the ongoing success and sustainability of our projects.
            </p>
          </div>
        </div>
      </section>

      {/* Section for Redevelopment Projects */}
      <section className="redevelopment-projects py-5">
        <h2 className="text-center mb-4">Redevelopment Projects</h2>
        <p>
          NBCC has expertise in land redevelopment and monetization. We operate on a unique self-sustainable model where funds are generated through commercial exploitation. Redevelopment projects can be completed through several models such as outright sale, freehold sale of built-up areas, or long-term leasing.
        </p>
        <div className="model-cards">
          <div className="card">
            <h5 className="card-title">Redevelopment Model 1</h5>
            <p className="card-text">Outright sale of part of the land.</p>
          </div>
          <div className="card">
            <h5 className="card-title">Redevelopment Model 2</h5>
            <p className="card-text">Freehold sale of part of the built-up area (BUA).</p>
          </div>
          <div className="card">
            <h5 className="card-title">Redevelopment Model 3</h5>
            <p className="card-text">Long-term lease of part of the built-up area (BUA).</p>
          </div>
        </div>
      </section>

      {/* Section for Milestone Projects */}
      <section className="milestone-projects py-5">
        <h2 className="text-center mb-4">Milestone Projects</h2>
        <div className="project-container">
          <div className="project-card">
            <h5 className="project-title">Completed Projects</h5>
            <ul>
              <li>GPRA New Moti Bagh Delhi (Project Cost: ₹524 Crores) - Model 1</li>
              <li>GPRA East Kidwai Nagar Delhi (Project Cost: ₹5500 Crores approx) - Model 3</li>
            </ul>
          </div>
          <div className="project-card">
            <h5 className="project-title">Ongoing Projects</h5>
            <ul>
              <li>Redevelopment of Sarojini Nagar, Netaji Nagar, and Narouji Nagar (Project Cost: ₹24000 Crores approx) - Model 2</li>
              <li>Redevelopment of AIIMS Residential Colonies (Project Cost: ₹5000 Crores approx) - Model 3</li>
              <li>Redevelopment of DTC Bus Depots in Delhi (Project Cost: ₹2000 Crores approx) - Model 2</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section for Secure Projects */}
      <section className="secure-projects py-5">
        <h2 className="text-center mb-4">Recently Secured Projects</h2>
        <p>
          NBCC continues to expand its reach with several key projects, including:
        </p>
        <ul>
          <li>Satellite Township at Rakh-Gund-Aksha, Srinagar (Project Cost: ₹15000 Crores approx.)</li>
          <li>Monetization/Development of Land Parcel for Kerala State Housing Board (Project Cost: ₹2000 Crores approx.)</li>
          <li>Land Parcel Development for MTNL and Kochi Metro Rail (Project Cost: ₹700 Crores approx.)</li>
        </ul>
      </section>

      
    </div>
  );
};

export default BusinessServices;
