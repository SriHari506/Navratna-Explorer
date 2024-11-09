import React from 'react';
import './Opportunities.css';

const Opportunities = () => {
  return (
    <div className="opportunities-container">
      <h2 className="title-Opportunities">MTNL Job Opportunities</h2>

      <p className="intro">
        Mahanagar Telephone Nigam Limited (MTNL) offers various career opportunities for talented individuals in a range of domains. Whether you're looking for technical roles, administrative positions, or customer service opportunities, MTNL provides a platform to grow and excel. Explore the following job roles and their eligibility criteria.
      </p>

      <div className="job-roles">
        <h3>Available Job Roles</h3>

        <ul>
          <li>
            <strong>Junior Engineer (Telecom)</strong>
            <p>
              As a Junior Engineer in the Telecom department, you will be responsible for network installations, maintenance, and troubleshooting. You will work with state-of-the-art telecommunication technologies to ensure smooth operations.
            </p>
            <strong>Eligibility:</strong> 
            <ul>
              <li>B.Tech or BE in Electronics/Telecommunication/Computer Science</li>
              <li>Minimum 60% marks in the relevant degree</li>
              <li>Aged between 18-30 years</li>
            </ul>
          </li>

          <li>
            <strong>Management Trainee</strong>
            <p>
              The Management Trainee role is designed for fresh graduates who want to start their career in the management field. You will assist in various management functions, including project coordination, strategic planning, and performance evaluation.
            </p>
            <strong>Eligibility:</strong>
            <ul>
              <li>Graduates or Postgraduates in Business Administration (MBA) or relevant fields</li>
              <li>Strong leadership and communication skills</li>
              <li>Aged between 21-28 years</li>
            </ul>
          </li>

          <li>
            <strong>Customer Service Executive</strong>
            <p>
              As a Customer Service Executive, you will be responsible for providing assistance to customers regarding MTNL’s services. This role involves addressing customer queries, resolving complaints, and ensuring customer satisfaction.
            </p>
            <strong>Eligibility:</strong>
            <ul>
              <li>Graduate in any discipline</li>
              <li>Excellent communication and problem-solving skills</li>
              <li>Aged between 18-25 years</li>
            </ul>
          </li>

          <li>
            <strong>Technician (Field Operations)</strong>
            <p>
              Technicians in field operations play a key role in the installation, maintenance, and troubleshooting of MTNL's network infrastructure. This role requires hands-on work and problem-solving on-site.
            </p>
            <strong>Eligibility:</strong>
            <ul>
              <li>ITI Certification in Electrical/Electronics or relevant fields</li>
              <li>Minimum 50% marks in the relevant certification</li>
              <li>Aged between 18-28 years</li>
            </ul>
          </li>

          <li>
            <strong>Finance Executive</strong>
            <p>
              As a Finance Executive, you will manage MTNL’s financial records, help in budgeting and forecasting, and ensure the company's financial health. You will be working closely with senior finance professionals.
            </p>
            <strong>Eligibility:</strong>
            <ul>
              <li>Graduation/Postgraduation in Finance, Accounting, or relevant fields</li>
              <li>Experience in financial analysis or accounting</li>
              <li>Aged between 21-35 years</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="application-process">
        <h3>How to Apply</h3>
        <p>
          To apply for any of the job roles at MTNL, follow the steps below:
        </p>
        <ol>
          <li>Visit the MTNL official website or the careers page for the latest job postings.</li>
          <li>Read the job descriptions carefully to ensure your eligibility.</li>
          <li>Fill out the online application form with your personal details, qualifications, and experience.</li>
          <li>Attach your resume and any other required documents (e.g., degree certificates, experience letters).</li>
          <li>Submit your application and wait for a confirmation email with further instructions.</li>
        </ol>
        <p>
          Shortlisted candidates will be notified about the selection process, including written tests, interviews, and further evaluations.
        </p>
      </div>

      <div className="important-dates">
        <h3>Important Dates</h3>
        <ul>
          <li><strong>Application Start Date:</strong> 1st January 2025</li>
          <li><strong>Last Date for Application Submission:</strong> 31st January 2025</li>
          <li><strong>Written Test Date:</strong> 15th February 2025</li>
          <li><strong>Interview Dates:</strong> 1st March 2025</li>
        </ul>
      </div>
    </div>
  );
};

export default Opportunities;
