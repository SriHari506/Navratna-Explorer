import React from 'react';
// import {Link} from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

const Footer = () => {
	return (
		<div className='flex max-sm:flex-col justify-center gap-10 border border-black bg-black/95 py-6 px-4'>
			<div className='flex flex-col gap-2'>
				<h3 className='text-white text-lg'>The Company</h3>
				<a
					href='https://www.concorindia.co.in/background.asp'
					className='text-white/50 hover:text-white/90'
				>
					Background
				</a>
				<a
					href='https://www.concorindia.co.in/company.asp'
					className='text-white/50 hover:text-white/90'
				>
					The Company
				</a>
				<a
					href='https://www.concorindia.co.in/mission.asp'
					className='text-white/50 hover:text-white/90'>
					Corporate Mission
				</a>
				<a
					href='https://www.concorindia.co.in/BODirs.asp'
					className='text-white/50 hover:text-white/90'>
					Board of Directors
				</a>
				<a
					href='https://www.concorindia.co.in/management.asp'
					className='text-white/50 hover:text-white/90'>
					Management Structure
				</a>
				<a
					href='https://www.concorindia.co.in/summary.asp'
					className='text-white/50 hover:text-white/90'>
					Financial
				</a>
				<a
					href='https://www.concorindia.co.in/CorpFigure.asp'
					className='text-white/50 hover:text-white/90'>
					Performance Figure
				</a>
			</div>
			<div className='flex flex-col gap-2'>
				<h3 className='text-white text-lg'>Services</h3>
				<a
					href='https://www.concorindia.co.in/interdivision.asp'
					className='text-white/50 hover:text-white/90'>
					International
				</a>
				<a
					href='https://www.concorindia.co.in/ddivision.asp'
					className='text-white/50 hover:text-white/90'>
					Domestic
				</a>
				<a
					href='https://www.concorindia.co.in/map.asp'
					className='text-white/50 hover:text-white/90'>
					Terminal Network
				</a>
				<a
					href='https://www.concorindia.co.in/faci_container.asp'
					className='text-white/50 hover:text-white/90'>
					Container Specific
				</a>
				<a
					href='https://www.concorindia.co.in/claims_proce.asp'
					className='text-white/50 hover:text-white/90'>
					Claims Procedure
				</a>
				<a
					href='https://www.concorindia.co.in/commo.asp'
					className='text-white/50 hover:text-white/90'>
					Hazardous Commodities
				</a>
			</div>

			<div className='flex flex-col gap-2'>
				<h3 className='text-white text-lg'>Contact Us</h3>
				<a
					href='https://www.concorindia.co.in/contact.asp'
					className='text-white/50 hover:text-white/90'>
					Contact Address
				</a>
				<a
					href='https://www.concorindia.co.in/directory.aspx'
					className='text-white/50 hover:text-white/90'>
					Company Directory
				</a>
				<a
					href='https://www.concorindia.co.in/VigilanceForm.asp'
					className='text-white/50 hover:text-white/90'>
					Vigilance Complaints
				</a>
				<a
					href='https://www.concorindia.co.in/InvestorsGrievances.asp'
					className='text-white/50 hover:text-white/90'>
					Investment Relations
				</a>
			</div>
		</div>
	)
}
export default Footer;
