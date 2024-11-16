import React from 'react';
import './BEL.css';
// import { colors } from '@mui/material';

const services = [
	"Radars",
	"Communication systems",
	"Electronic warfare systems",
	"Electro-optics",
	"Missile systems",
	"Space programs",
	"Broadcasting",
	"Telecommunications",
	"Power",
	"Transportation",
	"Healthcare",
	"Homeland security solutions",
	"Smart cities",
	"E-governance solutions",
	"Railways & metro solutions",
	"Airport solutions",
	"Electronic Voting Machines",
	"Telecom products",
	"Passive night vision devices",
];


const BELPage = () => (
	<div className="bel-page">
		{/* Hero Section */}
		<section className="hero bel-hero">
			<h1 className="belTitle">BHARAT ELECTRONIC LIMITED (BEL)</h1>
			<p>Excellence in Defense and Aerospace Electronics</p>
		</section>

		{/* About Section */}
		<section className="section about">
			<h2>About Us</h2>
			{/* <p>BEL is India’s leading defense electronics company, delivering high-quality solutions for government and defense needs.</p>


			<h2>Bharat Electronics Limited (BEL)</h2> */}
			<p>
				A Leading Electronics Company in India
			</p>
			<p>
				Bharat Electronics Limited (BEL) is a premier public sector undertaking (PSU) under the Ministry of Defence, Government of India. Since its inception in 1954, BEL has been at the forefront of India's technological advancements, playing a pivotal role in the country's defense and civilian sectors.
			</p>
			<h3>Our Mission</h3>
			<p>
				To be a global leader in technology and innovation, providing cutting-edge solutions for a secure and prosperous India.
			</p>
			<h3>Our Vision</h3>
			<p>
				To empower India through technology, ensuring national security and societal well-being.
			</p>
			<h3>Core Competencies</h3>
			<p>Defense Electronics: Sophisticated electronic systems for the Indian Armed Forces, including radars, communication systems, electronic warfare systems, and electro-optics.</p>
			<p>Strategic Electronics: Critical components and subsystems for strategic applications, such as missile systems and space programs.</p>
			<p>Civil Electronics: Innovative solutions for various civilian sectors, including broadcasting, telecommunications, power, transportation, and healthcare.</p>
			<h3>Our Commitment</h3>
			<p>Quality: Adherence to stringent quality standards and processes.</p>
			<p>Innovation: Continuous research and development to stay ahead of the curve.</p>
			<p>Customer Focus: Understanding and meeting the evolving needs of our customers.</p>
			<p>Social Responsibility: Contributing to the well-being of society through various initiatives.</p>
			<h3>Join Us in Shaping India's Future</h3>
			<p>
				BEL offers a dynamic and rewarding work environment for talented individuals. Explore career opportunities with us and be a part of our journey to technological excellence.
			</p>
		</section>

		{/* <AboutUs/> */}

		{/* Services Section */}
		<section className="section services">
			<h2>Our Services</h2>
			<div className="service-cards">

				{services.map((service, index) => {
					return <div className="card">{service}</div>
				})}
				
			</div>
		</section>

		{/* News Section */}
		<section className="section news">
			<h2>Latest News</h2>
			<div className="news-item">BEL wins award for Excellence in Defense Systems</div>
			<div className="news-item">New Radar System deployed for national security</div>
		</section>

		{/* Contact Section */}
		<section className="section contact">
			<h2>Contact Us</h2>
			<p>Visit our official site: <a href="https://bel-india.in" target="_blank" rel="noopener noreferrer">BEL Official Site</a></p>
		</section>
	</div>
);




export default BELPage;
