import React, { useState } from 'react';
import './Homepage.css';

// Company data
const companies = [
  {
    name: "Bharat Electronics Limited (BEL)",
    description: "Defense Electronics",
    link: "https://bel-india.in/",
    details: {
      mainAgenda: "Specializes in defense electronics, offering a wide range of products and services.",
      foundationDate: "1954",
      technologies: "Radar systems, avionics, and electronic voting machines.",
      jobOpportunities: "Engineering roles, project management, and R&D."
    }
  },
  {
    name: "Container Corporation of India Limited (CONCOR)",
    description: "Logistics and Transport",
    link: "https://www.concorindia.co.in/",
    details: {
      mainAgenda: "Focuses on logistics and multimodal transport.",
      foundationDate: "1988",
      technologies: "Container handling and logistics IT systems.",
      jobOpportunities: "Logistics management, supply chain, operations, and IT roles."
    }
  },
  {
    name: "Engineers India Limited (EIL)",
    description: "Engineering Consultancy",
    link: "http://www.engineersindia.com",
    details: {
      mainAgenda: "Provides engineering consultancy services for oil and gas sectors.",
      foundationDate: "1965",
      technologies: "Petroleum refining, petrochemicals, and pipeline engineering.",
      jobOpportunities: "Engineering, project management, and design roles."
    }
  },
  {
    name: "National Aluminium Company Limited (NALCO)",
    description: "Aluminium Production",
    link: "http://nalcoindia.com/",
    details: {
      mainAgenda: "Engaged in the production of aluminum and alumina.",
      foundationDate: "1981",
      technologies: "Bauxite mining, alumina refining, and aluminum smelting.",
      jobOpportunities: "Mining, metallurgy, and engineering roles."
    }
  },
  {
    name: "Mahanagar Telephone Nigam Limited (MTNL)",
    description: "Telecommunications",
    link: "http://www.mtnl.net.in/",
    details: {
      mainAgenda: "Provides telecommunications services in Mumbai and Delhi.",
      foundationDate: "1986",
      technologies: "Telecom infrastructure and broadband services.",
      jobOpportunities: "Telecom engineering and customer support roles."
    }
  },
  {
    name: "National Buildings Construction Corporation Limited (NBCC)",
    description: "Construction",
    link: "http://nbccindia.com/",
    details: {
      mainAgenda: "Focused on construction and project management.",
      foundationDate: "1960",
      technologies: "Construction management and real estate development.",
      jobOpportunities: "Civil engineering and project management roles."
    }
  },
  {
    name: "Neyveli Lignite Corporation Limited (NLC)",
    description: "Mining",
    link: "http://www.nlcindia.com/",
    details: {
      mainAgenda: "Engaged in lignite mining and power generation.",
      foundationDate: "1956",
      technologies: "Lignite mining and thermal power generation.",
      jobOpportunities: "Mining, engineering, and operations roles."
    }
  },
  {
    name: "NMDC Limited",
    description: "Mining",
    link: "http://www.nmdc.co.in/",
    details: {
      mainAgenda: "A public sector mining company engaged in iron ore and diamond mining.",
      foundationDate: "1958",
      technologies: "Mining operations and mineral processing.",
      jobOpportunities: "Mining engineering and management roles."
    }
  },
  {
    name: "Rashtriya Ispat Nigam Limited (RINL)",
    description: "Steel Production",
    link: "http://www.vizagsteel.com/",
    details: {
      mainAgenda: "Manufactures steel products and provides related services.",
      foundationDate: "1982",
      technologies: "Steel manufacturing processes and infrastructure.",
      jobOpportunities: "Metallurgy, engineering, and production roles."
    }
  },
  {
    name: "Shipping Corporation of India Limited (SCI)",
    description: "Shipping",
    link: "http://www.shipindia.com/",
    details: {
      mainAgenda: "Engaged in shipping and logistics services.",
      foundationDate: "1961",
      technologies: "Shipping management and maritime services.",
      jobOpportunities: "Marine engineering and logistics management roles."
    }
  },
  {
    name: "Rail Vikas Nigam Limited (RVNL)",
    description: "Infrastructure",
    link: "http://www.rvnl.org/",
    details: {
      mainAgenda: "Focuses on rail infrastructure development.",
      foundationDate: "2003",
      technologies: "Railway construction and project management.",
      jobOpportunities: "Civil engineering and project management roles."
    }
  },
  {
    name: "ONGC Videsh Ltd",
    description: "Oil and Gas",
    link: "http://www.ongcvidesh.com/",
    details: {
      mainAgenda: "Engaged in oil and gas exploration and production overseas.",
      foundationDate: "1965",
      technologies: "Exploration and production technology.",
      jobOpportunities: "Geology, engineering, and project management roles."
    }
  },
  {
    name: "Rashtriya Chemicals and Fertilizers Limited (RCF)",
    description: "Fertilizers",
    link: "http://www.rcfltd.com/",
    details: {
      mainAgenda: "Manufactures and sells fertilizers and chemicals.",
      foundationDate: "1978",
      technologies: "Fertilizer production and chemical processes.",
      jobOpportunities: "Chemical engineering and agricultural science roles."
    }
  },
  {
    name: "Housing and Urban Development Corporation Limited (HUDCO)",
    description: "Finance",
    link: "http://www.hudco.org/",
    details: {
      mainAgenda: "Provides financial assistance for housing and urban development.",
      foundationDate: "1970",
      technologies: "Housing finance and urban development projects.",
      jobOpportunities: "Finance, urban planning, and project management roles."
    }
  },
  {
    name: "Indian Renewable Energy Development Agency Limited (IREDA)",
    description: "Renewable Energy",
    link: "http://www.ireda.gov.in/",
    details: {
      mainAgenda: "Promotes renewable energy and energy efficiency projects.",
      foundationDate: "1987",
      technologies: "Renewable energy technologies and project financing.",
      jobOpportunities: "Engineering and project management roles in renewable energy."
    }
  },
  {
    name: "NHPC Limited",
    description: "Hydropower",
    link: "https://www.nhpcindia.com/",
    details: {
      mainAgenda: "Engaged in hydroelectric power generation.",
      foundationDate: "1975",
      technologies: "Hydropower generation and project management.",
      jobOpportunities: "Civil engineering and electrical engineering roles."
    }
  },
  // Additional companies omitted for brevity...
];

// CPSE Information data
const cpseInfo = [
  {
    title: "Overview of CPSEs",
    content: "CPSEs are government-owned enterprises in which the Central Government or other CPSEs hold at least 51% of the stake. These companies are involved in sectors like manufacturing, services, and infrastructure."
  },
  {
    title: "Ratna Status",
    content: "CPSEs are awarded Ratna statuses based on their performance, including Maharatna, Navratna, and Miniratna Categories I & II."
  },
  {
    title: "Sector-wise Distribution",
    content: "CPSEs operate in various sectors, including Manufacturing, Services, and Infrastructure Development."
  },
  {
    title: "Ownership Structure",
    content: "CPSEs are owned by the Central Government or other CPSEs, with a minimum 51% stake."
  },
  {
    title: "Liquidated CPSEs",
    content: "The Central Inland Water Transport Corporation was liquidated in 2016."
  }
];

const Homepage = ({ searchTerm }) => {
  const [selectedInfo, setSelectedInfo] = useState(null);
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage">
      <h1>Central Public Sector Enterprises (CPSEs)</h1>
      <div className="cpse-info-section">
        {cpseInfo.map((info, index) => (
          <div key={index} className="info-card" onClick={() => setSelectedInfo(info)}>
            <h3>{info.title}</h3>
            <p>{info.content}</p>
          </div>
        ))}
      </div>

      <div className="company-cards">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company, index) => (
            <div className="card" key={index}>
              <h3 className="card-title">{company.name}</h3>
              <p className="card-description">{company.description}</p>
              <div className="company-details">
                <p><strong>Main Agenda:</strong> {company.details.mainAgenda}</p>
                <p><strong>Foundation Date:</strong> {company.details.foundationDate}</p>
                <p><strong>Technologies:</strong> {company.details.technologies}</p>
                <p><strong>Job Opportunities:</strong> {company.details.jobOpportunities}</p>
              </div>
              <a href={company.link} target="_blank" rel="noopener noreferrer" className="button">Visit Official Website</a>
            </div>
          ))
        ) : (
          <p>No companies found matching your search.</p>
        )}
      </div>

      {selectedInfo && (
        <div className="info-popup">
          <h2>{selectedInfo.title}</h2>
          <p>{selectedInfo.content}</p>
          <button className="close-button" onClick={() => setSelectedInfo(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Homepage;
