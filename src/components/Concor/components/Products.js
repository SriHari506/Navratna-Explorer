import React from 'react';

const concorProducts = [
	{
		title: "ISO Containers",
		description: "Standardized containers used for transporting goods across rail, road, and sea. They ensure secure and efficient cargo handling, making them ideal for domestic and international trade.",
	},
	{
		title: "Refrigerated (Reefer) Containers",
		description: "Temperature-controlled containers designed to maintain the freshness and safety of perishable goods like food, pharmaceuticals, and chemicals during transit, ensuring quality across long distances.",
	},
	{
		title: "Open Top Containers",
		description: "Special containers without a fixed roof, allowing oversized or tall cargo to be loaded easily. These are perfect for machinery, construction equipment, or other large items.",
	},
	{
		title: "Flat Rack Containers",
		description: "Containers with no side walls or roof, ideal for heavy or bulky cargo like industrial equipment, vehicles, and construction materials. They are designed for easy loading and unloading.",
	},
	{
		title: "High Cube Containers",
		description: "Containers with additional height to accommodate voluminous cargo. These are especially useful for lightweight but bulky items like furniture or large industrial components.",
	},
	{
		title: "Tank Containers",
		description: "Specialized containers for transporting liquids, chemicals, and hazardous materials safely. They are built to meet strict international standards for safe handling and transit.",
	},
	{
		title: "Domestic Containers",
		description: "Containers specifically designed for domestic cargo movement, offering a cost-effective and reliable solution for businesses operating within India’s logistics network.",
	},
	{
		title: "Customized Logistics Solutions",
		description: "Tailored container solutions to meet unique customer needs. These include specialized containers or modifications to standard designs, ensuring suitability for specific cargo requirements.",
	},
];



const Products = () => {
	return (
		<>
			<div className="my-4 py-4" id='portfolio'>
				<h2 className="mt-2 mb-10 text-center text-3xl text-blue-900 font-bold">Products</h2>

				<div className="px-4" data-aos="fade-down" data-aos-delay="600">
					<div className="flex flex-wrap items-center justify-center gap-4">
						{concorProducts.map((product, index) => {
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