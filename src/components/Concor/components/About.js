import React from "react";


const AboutUs = () => {
	return (
		<section className="bg-gray-100 py-12">
			<div className="container mx-auto px-6 md:px-12 lg:px-20">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
						About Us
					</h2>
					<p className="mt-4 text-gray-600">
						Concor is a leading logistics and supply chain enterprise committed
						to efficiency, innovation, and national growth. Established to revolutionize
						transportation and containerized cargo management, Concor plays a pivotal role
						in India's economic development.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Left Column: Image */}
					<div className="flex justify-center">
						<video
							src="/concor.mp4"
							controls
							className="h-[400px] rounded-lg shadow-lg"
						>
							Your browser does not support the video tag.
						</video>
					</div>

					{/* Right Column: Text */}
					<div>
						<h3 className="text-2xl font-semibold text-gray-800">
							Who We Are
						</h3>
						<p className="mt-4 text-gray-600">
							Concor (Container Corporation of India) is a premier logistics company under
							the Ministry of Railways, Government of India. With decades of expertise, Concor
							excels in providing state-of-the-art intermodal transportation solutions, supply
							chain management, and infrastructure development. Its commitment to quality,
							innovation, and sustainability makes it a trusted partner for businesses globally.
						</p>
						<h3 className="text-2xl font-semibold text-gray-800 mt-6">
							Our Vision
						</h3>
						<p className="mt-4 text-gray-600">
							To be a world-class logistics and supply chain enterprise, driving innovation and
							efficiency to enhance India's global competitiveness and economic growth.
						</p>
						<h3 className="text-2xl font-semibold text-gray-800 mt-6">
							Our Mission
						</h3>
						<p className="mt-4 text-gray-600">
							Concor is dedicated to delivering cutting-edge logistics and intermodal solutions,
							empowering businesses, fostering trade, and enabling seamless connectivity across
							the nation and beyond.
						</p>
					</div>
				</div>
			</div>
		</section>

	);
};

export default AboutUs;
