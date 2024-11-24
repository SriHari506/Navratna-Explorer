import React from 'react';
// import SocialMediaIcons from './SocialMediaIcons';
// import { Link } from 'react-router-dom';
// import heroImg from '../images/web-dev.svg';

const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

                    <div id='hero' className="flex flex-col lg:flex-row sm:gap-6 sm:py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
							<h1 className="mb-5  sm:text-3xl md:text-5xl font-bold text-blue-900">
								Innovating Electronics, Empowering Nations
                            </h1>
							<div className="text-sm sm:text-lg font-semibold tracking-tight mb-5 text-gray-500">
								Bharat Electronics Limited (BEL) is a Navratna enterprise driving technological excellence in defense, aerospace, homeland security, and beyond.
								With over six decades of experience, BEL is committed to delivering cutting-edge solutions that ensure safety, sustainability, and progress.
								Explore our innovations that safeguard the present and shape the future.
							</div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded float-right duration-1000 w-full" src='/bel.jpg' />
						</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;