// src/components/MTNL/Services.js
import React from 'react';

const Services = () => {
  return (
    <div id="services" className="section py-5">
      <div className="container">
        <h2>Our Services</h2>
        <div className="row">
          {/* Service Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://example.com/service1.jpg" alt="Broadband" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Broadband Plans</h5>
                <p className="card-text">MTNL offers high-speed broadband connections with unlimited data options and competitive pricing.</p>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://example.com/service2.jpg" alt="Mobile Services" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Mobile Services</h5>
                <p className="card-text">MTNL offers prepaid and postpaid mobile connections with affordable data and talk time packages.</p>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://example.com/service3.jpg" alt="Data Plans" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Data Plans</h5>
                <p className="card-text">Choose from a variety of data plans to suit your browsing and internet usage needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
