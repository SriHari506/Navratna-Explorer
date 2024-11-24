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
						Bharat Electronics Limited (BEL) is a Navratna Public Sector Enterprise committed
						to technological innovation and national growth. Established in 1954, BEL leads
						the way in professional electronics for defense and non-defense sectors.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Left Column: Image */}
					<div className="flex justify-center">
						<video
							src="/bel.mp4"
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
							Bharat Electronics Limited (BEL) is a premier electronics company under the
							Ministry of Defence, Government of India. With a legacy spanning over six decades,
							BEL excels in providing state-of-the-art solutions in defense, aerospace, homeland
							security, and healthcare. Its focus on quality, innovation, and sustainability has
							made it a trusted name globally.
						</p>
						<h3 className="text-2xl font-semibold text-gray-800 mt-6">
							Our Vision
						</h3>
						<p className="mt-4 text-gray-600">
							To be a world-class enterprise in professional electronics, fostering innovation and
							addressing the needs of defense and civilian markets, ensuring a secure and sustainable
							future.
						</p>
						<h3 className="text-2xl font-semibold text-gray-800 mt-6">
							Our Mission
						</h3>
						<p className="mt-4 text-gray-600">
							BEL is dedicated to providing cutting-edge electronics products and systems to the armed
							forces while diversifying into non-defense areas like energy, healthcare, and smart cities
							to contribute to India's progress.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
