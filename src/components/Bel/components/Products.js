import React from 'react';
import { Link } from 'react-router-dom';

const belProducts = [
	{
		title: "Radar Systems",
		description: "Advanced radar solutions for comprehensive surveillance and tracking. These include air defense radars, battlefield surveillance systems, and weather radars designed for precise detection, target identification, and threat assessment across varied terrains and environments."
	},
	{
		title: "Communication Equipment",
		description: "Secure and reliable communication systems tailored for defense forces and civilian needs. These include radio communication systems, satellite-based solutions, and tactical communication networks ensuring seamless data and voice connectivity in critical situations."
	},
	{
		title: "Electronic Warfare Systems",
		description: "State-of-the-art electronic warfare systems designed for tactical superiority. They provide advanced capabilities like jamming, signal interception, and electronic countermeasures to neutralize threats and enhance situational awareness during combat operations."
	},
	{
		title: "Sonar Systems",
		description: "High-performance sonar equipment for naval and underwater operations. These systems include hull-mounted, towed array, and airborne sonar systems for anti-submarine warfare, underwater surveillance, and oceanographic research."
	},
	{
		title: "Missile Electronics",
		description: "Sophisticated electronics for missile guidance, control, and targeting. These include seekers, actuators, and electronic systems that ensure accuracy, reliability, and performance for a wide range of missile platforms."
	},
	{
		title: "Naval Systems",
		description: "Integrated systems for naval combat operations, including fire control systems, combat management systems, and torpedo defense mechanisms. These enhance operational efficiency and survivability in maritime defense scenarios."
	},
	{
		title: "Tank Electronics",
		description: "Advanced electronic systems for armored vehicles, including laser rangefinders, fire control systems, and battlefield management units. These solutions optimize precision targeting and situational awareness in tank operations."
	},
	{
		title: "Solar Solutions",
		description: "Renewable energy products such as solar photovoltaic systems, solar lanterns, and off-grid power solutions. These are designed to meet the energy needs of remote areas, defense establishments, and urban installations."
	},
	{
		title: "Civilian Products",
		description: "Electronics solutions for various civilian sectors, including medical equipment like ventilators, public transportation systems, and automation products. BEL leverages its defense expertise to deliver reliable and innovative products for societal benefits."
	},
	{
		title: "Custom Solutions",
		description: "Specialized electronics systems developed to meet unique customer requirements. BEL offers end-to-end solutions, from design to deployment, tailored for industries such as defense, aerospace, and critical infrastructure."
	}
];


const Products = () => {
	return (
		<>
			<div className="my-4 py-4" id='portfolio'>
				<h2 className="mt-2 mb-10 text-center text-3xl text-blue-900 font-bold">Products</h2>

				<div className="px-4" data-aos="fade-down" data-aos-delay="600">
					<div className="flex flex-wrap items-center justify-center gap-4">
						{belProducts.map((product, index) => {
							return (
								<div className="w-[350px] bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
									<div className="m-2 text-justify text-sm">
										<h4 className="font-bold my-4 text-[22px] text-center mb-6 h-12">{product.title}</h4>
										<p className="text-md font-medium leading-5 h-auto md:h-48">
											{product.description}
										</p>
										{/* <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div> */}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Products;