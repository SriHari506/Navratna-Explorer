import React from 'react';

const concorServices = [
	{
		heading: "Containerized Freight Services",
		description:
			"CONCOR specializes in the efficient transport of goods using containerized rail and road networks. These services ensure safe, cost-effective, and timely delivery of goods across India and internationally, leveraging modern equipment and robust infrastructure to handle various types of cargo, including hazardous materials and heavy machinery.",
	},
	{
		heading: "Domestic and International Logistics Solutions",
		description:
			"CONCOR provides comprehensive logistics solutions for both domestic and international supply chains. From the first-mile pickup to last-mile delivery, their services integrate rail, road, and sea transportation to ensure seamless movement of goods. Tailored solutions cater to businesses across industries, focusing on minimizing transit times and optimizing costs.",
	},
	{
		heading: "Terminal Operations",
		description:
			"With state-of-the-art container terminals across India, CONCOR manages the efficient handling, storage, and dispatch of goods. These terminals are equipped with modern facilities for stacking, loading, and unloading containers, ensuring minimal delays. The services also include container maintenance, repair, and efficient workflow management for uninterrupted operations.",
	},
	{
		heading: "Customs Clearance Facilities",
		description:
			"CONCOR offers on-site customs clearance services at its terminals and depots to streamline the import and export process. These facilities ensure compliance with regulations, reducing delays in shipments. By providing expert assistance, CONCOR simplifies paperwork and manages inspections to help businesses maintain smooth international trade operations.",
	},
	{
		heading: "Refrigerated Container Services (Cold Chain)",
		description:
			"CONCOR operates specialized refrigerated containers to support the transportation of temperature-sensitive goods like pharmaceuticals, food products, and perishables. These services ensure optimal storage conditions and safe delivery over long distances. With real-time monitoring and precise temperature controls, the cold chain services cater to diverse industry needs.",
	},
	{
		heading: "Warehousing and Distribution",
		description:
			"CONCOR provides extensive warehousing facilities designed to store goods safely and securely. These facilities are integrated with distribution networks to streamline supply chains. Value-added services such as inventory management, packaging, and labeling help businesses optimize storage solutions while ensuring faster delivery to end customers.",
	},
	{
		heading: "Multimodal Transport Services (Rail, Road, Sea, Air)",
		description:
			"CONCOR offers multimodal transport solutions, leveraging rail, road, sea, and air networks to ensure end-to-end connectivity. These services provide flexibility, cost-efficiency, and faster transit times. By integrating various transportation modes, CONCOR ensures seamless logistics for businesses, regardless of the cargo size or destination.",
	},
	{
		heading: "Port and Inland Container Depot (ICD) Operations",
		description:
			"CONCOR operates strategically located Inland Container Depots (ICDs) and port terminals that facilitate smooth handling of import and export cargo. These facilities are equipped with advanced machinery and IT systems, ensuring rapid loading, unloading, and transshipment processes to meet the demands of international trade.",
	},
	{
		heading: "Cargo Tracking and Information Systems",
		description:
			"To enhance supply chain transparency, CONCOR provides advanced cargo tracking systems. Customers can monitor their shipments in real-time, accessing critical information about the status, location, and expected delivery times of their goods. This service helps improve efficiency and fosters trust through accurate tracking and timely updates.",
	},
	{
		heading: "Value-Added Logistics Services",
		description:
			"Beyond basic transportation, CONCOR offers a range of value-added services such as packing, labeling, and cargo consolidation. These services are tailored to meet specific customer requirements, enhancing supply chain efficiency and providing businesses with a competitive edge in managing their logistics operations effectively.",
	},
];



const Services = () => {

	return (
		<div id="services" className="bg-gray-100 py-12" >
			<section data-aos="zoom-in-down">
				<div className="my-4 py-4">
					<h2 className="my-2 text-center text-3xl text-blue-900  font-bold">Services</h2>
					<h2 className="mt-4 mx-12 text-center font-semibold text-black/50">
						At CONCOR, we offer a wide range of services designed to streamline and enhance your logistics operations.
						From efficient containerized freight solutions and multimodal transportation to customs clearance and cold chain services, we ensure your cargo is handled with utmost precision and care.
						Our state-of-the-art terminals, warehousing facilities, and advanced cargo tracking systems provide seamless connectivity and real-time visibility, enabling businesses to optimize their supply chains.
					</h2>
				</div>

				<div className="px-12" data-aos="fade-down" data-aos-delay="600">
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

						{concorServices.map((service, index) => {
							return (
								<div className="group bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
									<div className="m-2 text-sm">
										{/* <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} /> */}
										<h2 className="font-semibold my-4 text-xl text-center group-hover:text-white">{service.heading}</h2>
										<p className="text-sm font-medium text-justify">
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