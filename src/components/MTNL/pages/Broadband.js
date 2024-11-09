// src/components/MTNL/pages/Broadband.js
import React from 'react';
import './Broadband.css'; 
const Broadband = () => {
  return (
    <div>
      <h1 className='services'>MTNL Broadband Services</h1>
      <p>Explore our broadband plans for high-speed internet.</p>

      <h2>Fiber Plans</h2>
      <p>Unlimited High-Speed Fiber Plans (Monthly | Half Yearly | Yearly)</p>

      <table>
        <thead>
          <tr>
            <th>Internet Speed (DN/UP)</th>
            <th>Plan Name</th>
            <th>Service Charges (Rs)</th>
            <th>Data Usage</th>
            <th>Free Usage Limit (FUP)</th>
            <th>Speed After FUP (DN/UP)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30 Mbps</td>
            <td>Fiber_449_30Mb_Combo</td>
            <td>449/-</td>
            <td>--</td>
            <td>Unlimited</td>
            <td>4 Mbps</td>
          </tr>
          <tr>
            <td>100 Mbps</td>
            <td>Fiber_600_100Mb_combo</td>
            <td>600/-</td>
            <td>3,300/-</td>
            <td>Unlimited</td>
            <td>2 Mbps</td>
          </tr>
          <tr>
            <td>100 Mbps</td>
            <td>Fiber_799_100Mb_combo</td>
            <td>799/-</td>
            <td>4,395/-</td>
            <td>Unlimited</td>
            <td>5 Mbps</td>
          </tr>
          <tr>
            <td>150 Mbps</td>
            <td>Fiber_899_150Mb_combo</td>
            <td>899/-</td>
            <td>4,944/-</td>
            <td>Unlimited</td>
            <td>5 Mbps</td>
          </tr>
          <tr>
            <td>200 Mbps</td>
            <td>Fiber_1100_200Mb_combo</td>
            <td>1,100/-</td>
            <td>6,050/-</td>
            <td>Unlimited</td>
            <td>5 Mbps</td>
          </tr>
          <tr>
            <td>300 Mbps</td>
            <td>Fiber_1400_300Mb_combo</td>
            <td>1,400/-</td>
            <td>7,700/-</td>
            <td>Unlimited</td>
            <td>5 Mbps</td>
          </tr>
          <tr>
            <td>500 Mbps</td>
            <td>Fiber_2299_500Mb_combo</td>
            <td>2,299/-</td>
            <td>12,645/-</td>
            <td>Unlimited</td>
            <td>5 Mbps</td>
          </tr>
          <tr>
            <td>1 Gbps</td>
            <td>Fiber_3999_1G_combo</td>
            <td>3,999/-</td>
            <td>21,994/-</td>
            <td>Unlimited</td>
            <td>5 Mbps</td>
          </tr>
          <tr>
            <td>1 Gbps</td>
            <td>Fiber_7999_1G_combo</td>
            <td>7,999/-</td>
            <td>43,994/-</td>
            <td>Unlimited</td>
            <td>15 Mbps</td>
          </tr>
        </tbody>
      </table>

      <p>Free Voice Benefits of Unlimited Calls: Local + STD (on any network) on all above plans.</p>
      <p>Monthly / Half Yearly / Yearly plan can be opted</p>
      <p><strong>Note:</strong> All above plans offer Symmetric Speed (i.e. same Download and Upload speed) up to the Free Usage (FUP) limit.</p>

      <button 
        onClick={() => window.location.href = "https://billcare.mtnl.net.in/newline/ftth_1/one"} 
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}>
        Book Online
      </button>
    </div>
  );
};

export default Broadband;
