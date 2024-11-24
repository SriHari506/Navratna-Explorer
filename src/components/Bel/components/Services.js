import React from 'react';

const belServices = [
	{
		heading: "Defense Electronics",
		description: "BEL plays a pivotal role in designing and manufacturing advanced defense electronics tailored for the armed forces. Its product portfolio includes cutting-edge radar systems for surveillance and tracking, secure communication systems that enable encrypted data exchange, and electronic warfare solutions to counter hostile threats. Additionally, BEL develops fire control systems and tactical solutions that enhance operational precision in combat scenarios. These technologies are developed to meet stringent defense requirements, ensuring national security while keeping the armed forces equipped with state-of-the-art tools for modern warfare."
	},
	{
		heading: "Homeland Security Solutions",
		description: "BEL provides a wide range of homeland security solutions designed to safeguard critical infrastructure and urban environments. These include high-tech surveillance systems equipped with AI-driven analytics, integrated perimeter security for sensitive zones, and command and control centers for efficient monitoring. BEL also delivers robust cyber security solutions to protect against digital threats, ensuring data safety and system integrity. The company’s offerings cater to diverse sectors, including defense, law enforcement, and smart city projects, enhancing overall public safety and resilience."
	},
	{
		heading: "Electronic Voting Machines (EVMs)",
		description: "BEL is a trusted pioneer in the development and supply of electronic voting machines (EVMs) and voter-verifiable paper audit trails (VVPATs). These systems ensure secure, tamper-proof, and transparent electoral processes, meeting the highest standards of reliability. EVMs are designed with multi-layered security features, making them immune to manipulation. The VVPAT systems provide voters with a physical confirmation of their vote, further enhancing trust and accountability. BEL’s EVMs have been instrumental in facilitating free and fair elections across the country, cementing its reputation as a leader in democratic technology."
	},
	{
		heading: "Medical Electronics",
		description: "In response to growing healthcare needs, BEL has diversified into the medical electronics domain. The company manufactures high-quality ventilators that support critical care units, oxygen concentrators to aid respiratory therapy, and advanced patient monitoring systems. BEL also develops diagnostic devices for accurate medical analysis. These innovations are designed to meet international standards, ensuring durability and reliability in medical emergencies. BEL’s foray into healthcare technology demonstrates its commitment to addressing societal needs and supporting the healthcare infrastructure, especially during times of crisis such as the COVID-19 pandemic."
	},
	{
		heading: "Energy and Smart Grid Solutions",
		description: "BEL is actively contributing to sustainable energy initiatives by offering a range of energy and smart grid solutions. These include solar power generation systems, energy storage solutions for uninterrupted power supply, and smart metering technologies for efficient energy management. BEL’s smart grid systems enable real-time monitoring and control of power distribution, ensuring minimal losses and enhanced reliability. By integrating renewable energy with advanced grid technologies, BEL supports India’s vision of a greener and more sustainable future, catering to both urban and rural energy requirements."
	},
	{
		heading: "Civil Aviation and Traffic Management",
		description: "BEL develops advanced solutions for civil aviation and traffic management, ensuring the safety and efficiency of transportation systems. The company offers air traffic control systems and airport surveillance radars, enabling seamless navigation and monitoring in busy airspaces. Additionally, BEL provides intelligent traffic management solutions that optimize traffic flow and reduce congestion in urban areas. These systems leverage cutting-edge technologies like AI and IoT to ensure real-time traffic monitoring and management, catering to the growing needs of modern transportation infrastructure."
	},
	{
		heading: "Satellite and Space Electronics",
		description: "BEL has made significant contributions to India’s space program by manufacturing reliable satellite components and ground support systems. Its expertise includes developing advanced payloads for communication and navigation satellites, as well as systems for earth observation missions. BEL also designs telemetry and tracking systems that ensure precise control over satellite operations. With a focus on innovation, BEL supports both domestic and international space missions, playing a crucial role in advancing India’s capabilities in space exploration and satellite-based communication."
	},
	{
		heading: "Software Development and Artificial Intelligence",
		description: "BEL provides a comprehensive range of software solutions for defense and civilian applications, leveraging the latest advancements in technology. The company develops secure and robust software platforms for critical operations, including data analytics, decision-making, and automated processes. BEL also focuses on artificial intelligence and machine learning applications, creating intelligent systems for predictive analytics, surveillance, and cybersecurity. These innovations help optimize operations, enhance decision-making capabilities, and ensure efficient resource utilization, making BEL a leader in software-driven solutions for diverse sectors."
	}
];


const Services = () => {

	return (
		<div id="services" className="bg-gray-100 py-12" >
			<section data-aos="zoom-in-down">
				<div className="my-4 py-4">
					<h2 className="my-2 text-center text-3xl text-blue-900  font-bold">Services</h2>
					<h2 className="mt-4 mx-12 text-center font-semibold text-black/50">
						Bharat Electronics Limited (BEL) offers a wide range of cutting-edge solutions and services across diverse sectors.
						From defense electronics to homeland security, medical technology to energy solutions, BEL is committed to innovation and quality.
						Each service is designed to meet the needs of modern industries, ensuring reliability, sustainability, and advanced technological capabilities.
						Explore the services below to understand how BEL is contributing to India's growth and security through its expertise and innovation.
					</h2>
				</div>

				<div className="px-12" data-aos="fade-down" data-aos-delay="600">
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

						{belServices.map((service, index) => {
							return (
								<div className="group bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
									<div className="m-2 text-sm">
										{/* <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} /> */}
										<h2 className="font-semibold my-4 text-2xl text-center group-hover:text-white">{service.heading}</h2>
										<p className="text-md font-medium text-justify">
											{service.description}
										</p>
									</div>
								</div>

							)
						})}

					</div>
				</div>
			</section>

			{/* <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 
                            font-bold">We <span className='font-black'>Build</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    With over 10 years experience in software analysis and design and a deep understanding of the latest IT trends and solutions, we provide customized recommendations and strategies to help you improve your operations, reduce costs, and increase efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 font-bold">We <span className='font-black'>Collaborate</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suits your everyday need and simplifies various processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
		</div>
	)
}

export default Services;