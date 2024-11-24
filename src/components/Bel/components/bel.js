import React from 'react';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import AboutUs from './About';


const Bel = () => {
	return (
		<>
			<Hero />
			<AboutUs />
			<Services />

			<Products />
			<Footer />
		</>

	)
}

export default Bel;

