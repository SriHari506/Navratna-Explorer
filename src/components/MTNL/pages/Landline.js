// Landline.js
import React from 'react';
import './Landline.css'; // Make sure to create this CSS file for styling

const Landline = () => {
  return (
    <div className="landline-page">
      <h2>MTNL Landline Plans</h2>
      <p>Last Updated on 1st July 2021</p>
      <button className="book-online-button">Book Online</button>

      <section className="landline-info">
        <p>
          Calls to any Landline & Mobile Network (both Mumbai & Delhi) shall be free between 11:00 PM to 07:00 AM.
        </p>
        <p>
          All STD calls shall be charged 1 MCU per 180 sec between 11:00 PM to 07:00 AM. (w.e.f. 1st March 2018)
        </p>
      </section>

      <h3>Landline Plans</h3>
      <table className="landline-table">
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Plan 199*</th>
            <th>Plan 225*</th>
            <th>Economy Plan*</th>
            <th>Plan 400*</th>
            <th>Popular Plan 550*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ideal For</td>
            <td>Small Call Center</td>
            <td>Household</td>
            <td>Small Business & Home</td>
            <td></td>
            <td>Suitable for Small Offices/Shops/Small Scale Industries</td>
          </tr>
          <tr>
            <td>Monthly Fixed charges (Rs.)</td>
            <td>199</td>
            <td>225</td>
            <td>310</td>
            <td>400</td>
            <td>550</td>
          </tr>
          <tr>
            <td>Free Calls</td>
            <td>Nil</td>
            <td>50</td>
            <td>100</td>
            <td>200</td>
            <td>450</td>
          </tr>
          <tr>
            <td>Rate Per Pulse (Rs.)</td>
            <td>NA</td>
            <td>1</td>
            <td>Rs. 1.00 (101-500 calls), Rs.0.90 (501-1500 calls), Rs.0.80 (above 1500 calls)</td>
            <td>Rs.0.90 (201-500 calls), Rs.0.80 (above 500 calls)</td>
            <td>0.70</td>
          </tr>
          <tr>
            <td>Local Call Pulse Rate (To MTNL Mumbai N/W)</td>
            <td colSpan="5">MTNL Landline: 180 Sec, MTNL Mobile: 60 Sec, Other Landline/Mobile: 60 Sec</td>
          </tr>
          <tr>
            <td>STD Call Pulse Rate (0 - 50 Km)</td>
            <td colSpan="5">MTNL Delhi Landline: 90 Sec, Other Landline/Mobile: 60 Sec</td>
          </tr>
          <tr>
            <td>STD Call Pulse Rate (less than 50 Km)</td>
            <td colSpan="5">60 Sec</td>
          </tr>
        </tbody>
      </table>

      <section className="additional-info">
        <h4>Additional Information</h4>
        <ul>
          <li>Centrex Facility</li>
          <li>ISD Tariff</li>
          <li>Phone Plus</li>
          <li>Documents Needed</li>
          <li>Special Discounts</li>
          <li>Directory Search</li>
          <li>Missed Call Alert</li>
          <li>PCO</li>
        </ul>
      </section>
    </div>
  );
};

export default Landline;
