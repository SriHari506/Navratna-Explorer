import React from 'react';
// import {Link} from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

const Footer = () => {
	return (
		<div className='flex max-sm:flex-col justify-center gap-10 border border-black bg-black/95 py-6 px-4'>
			<div className='flex flex-col gap-2'>
				<h3 className='text-white text-lg'>Discover BEL</h3>
				<a
					href='https://bel-india.in/history/'
					className='text-white/50 hover:text-white/90'
				>
					History
				</a>
				<a
					href='https://bel-india.in/leadership/'
					className='text-white/50 hover:text-white/90'
				>
					LeaderShip
				</a>
				<a
					href='https://bel-india.in/csr/'
					className='text-white/50 hover:text-white/90'>
					CSR
				</a>
				<a
					href='https://bel-india.in/sd/'
					className='text-white/50 hover:text-white/90'>
					SD
				</a>
				<a
					href='https://bel-india.in/vigilance/'
					className='text-white/50 hover:text-white/90'>
					Vigilance
				</a>
				<a
					href='https://bel-india.in/job-notifications/'
					className='text-white/50 hover:text-white/90'>
					Job Notifications
				</a>
				<a
					href='https://bel-india.in/results/'
					className='text-white/50 hover:text-white/90'>
					Results
				</a>
				<a
					href='https://bel-india.in/news/'
					className='text-white/50 hover:text-white/90'>
					News
				</a>
			</div>
			<div className='flex flex-col gap-2'>
				<h3 className='text-white text-lg'>What BEL do</h3>
				<a
					href='https://bel-india.in/defence/'
					className='text-white/50 hover:text-white/90'>
					Defence
				</a>
				<a
					href='https://bel-india.in/non-defence/'
					className='text-white/50 hover:text-white/90'>
					Non Defence
				</a>
				<a
					href='https://bel-india.in/software/software-products/'
					className='text-white/50 hover:text-white/90'>
					Software Products
				</a>
				<a
					href='https://bel-india.in/software/software-services/'
					className='text-white/50 hover:text-white/90'>
					Software Services
				</a>
				<a
					href='https://bel-india.in/electronic-design-manufacturing-services/'
					className='text-white/50 hover:text-white/90'>
					Electronics Design
				</a>
				<a
					href='https://bel-india.in/exports/'
					className='text-white/50 hover:text-white/90'>
					Exports
				</a>
			</div>

			<div className='flex flex-col gap-2'>
				<h3 className='text-white text-lg'>Other Links</h3>
				<a
					href='https://bel-india.in/start-ups/'
					className='text-white/50 hover:text-white/90'>
					Start-ups
				</a>
				<a
					href='https://srm.bel.co.in/'
					className='text-white/50 hover:text-white/90'>
					SRM
				</a>
				<a
					href='https://hpcrmp2.iscodom.com/sap/crm_logon?sap-clent=710'
					className='text-white/50 hover:text-white/90'>
					CRM
				</a>
				<a
					href='https://bel-india.in/msmes-initiatives/'
					className='text-white/50 hover:text-white/90'>
					MSMEs Initiatives
				</a>
				<a
					href='https://bel-india.in/other-defence-sites/'
					className='text-white/50 hover:text-white/90'>
					Other Defence Sites
				</a>
				<a
					href='https://bel-india.in/public-grievances/'
					className='text-white/50 hover:text-white/90'>
					Public Grievances
				</a>
			</div>
		</div>
	)
}
export default Footer;
