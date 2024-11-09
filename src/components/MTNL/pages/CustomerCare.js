import React from 'react';
import './CustomerCare.css';  // Import the custom styles

const CustomerCare = () => {
  return (
    <div className="container mt-5 MTNL-body">
      <h1 className="text-center mb-4 title-MTNL">MTNL Customer Care</h1>
      <p className="text-center mb-5 description">
        Our customer care team is here to assist you with any queries or issues. Below are the contact details and services offered.
      </p>

      {/* Contact Details Section */}
      <div className="contact-details mb-5">
        <h4 className="section-title">Contact Details of Senior Officer of MTNL, Mumbai</h4>

        <div className="address-section mb-4">
          <h5 className="address-title">MTNL Mumbai:</h5>
          <p className="address-text">
            15th floor, Telephone House, <br />
            MTNL Road, Prabhadevi, Dadar (West), <br />
            Mumbai - 400 028
          </p>
        </div>

        <div className="address-section mb-4">
          <h5 className="address-title">Registered Office:</h5>
          <p className="address-text">
            5th Floor, Mahanagar Door Sanchar Sadan, <br />
            9, CGO Complex, Lodhi Road, <br />
            New Delhi - 110003
          </p>
        </div>

        <div className="address-section">
          <h5 className="address-title">CIN:</h5>
          <p className="address-text">L32101DL1986GOI023501</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section mb-5">
        <h4 className="section-title">Book Complaint</h4>
        <p className="complaint-info">
          <strong>For Landline to Mobile Calls:</strong> All landline users are requested to add the prefix '0' before dialing any mobile number.
        </p>

        <h5 className="services-title">IVRS / Call Center:</h5>
        <div className="service-info mb-3">
          <h6 className="sub-title">Online:</h6>
          <p className="service-description">
            Visit the MTNL online portal to register your complaint or request services.
          </p>
        </div>

        <div className="service-info mb-3">
          <h6 className="sub-title">SMS:</h6>
          <p className="service-description">
            Send an SMS to the relevant number provided below based on the service type.
          </p>
        </div>

        <div className="service-info mb-3">
          <h6 className="sub-title">Escalation Procedures:</h6>
          <p><strong>Escalation-1:</strong> Contact the first escalation point for unresolved complaints.</p>
          <p><strong>Escalation-2:</strong> Contact the second escalation point if the issue remains unresolved after the first escalation.</p>
        </div>

        <h6 className="ivrs-title">IVRS (Landline/Broadband/FTTH):</h6>
        <ul className="ivrs-list">
          <li>Via MTNL Landline Number: Dial - <strong>XXXX 2198</strong></li>
          <li>Via Mobile Number: Dial - <strong>022 XXXX 2198</strong></li>
          <p>* Kindly note, XXXX is the first 4 digits of the customer's MTNL landline number (e.g., 2431 2198).</p>
        </ul>

        <h6 className="call-center-title">Call Center:</h6>
        <ul className="call-center-list">
          <li><strong>Common Service Number (Landline/Broadband/Mobile):</strong> 1130 / 1800 22 1130</li>
          <li><strong>Landline:</strong> 1500 / 2222 1500 / 1800 22 1500</li>
          <li><strong>Broadband:</strong> 1504 / 1800 22 8844</li>
          <li><strong>FTTH:</strong> 1130 / 1800 22 1130</li>
          <li><strong>Mobile:</strong> 1503 / 2222 1503 / 9869 012345</li>
          <li><strong>IN Services:</strong> 1800 22 1500</li>
        </ul>

        <h6 className="other-services-title">Other Services:</h6>
        <ul className="other-services-list">
          <li><strong>Public Grievance Service:</strong> 1509</li>
          <li><strong>Know your Landline/Broadband unpaid Bill Amount:</strong> 1130 / 1800 22 1130</li>
          <li><strong>Know your Landline/Broadband unpaid Bill Amount through SMS:</strong> Send SMS Bill {`<Landline No>`} to 51001</li>
        </ul>
      </div>

      <div className="text-center mb-4">
        <button className="btn btn-primary contact-btn">Contact Us Now</button>
      </div>
    </div>
  );
};

export default CustomerCare;
