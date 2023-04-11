import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Appliedjob = ({ appliedjob }) => {
    const { id, company_logo, job_title, company_name, job_type, location, salary } = appliedjob;
    return (
        <div className='lg:px-28 my-2 lg:my-5 lg:mb-20'>
            <div className='flex items-center'>
                <img className='h-44 w-44' src={company_logo} alt="" />
                <div className='flex items-center flex-grow justify-between p-5'>
                    <div>
                        <h1 className="text-xl-font-bold">{job_title}</h1>

                        <h1 className='text-lg text-gray-600' >{company_name}</h1>

                        <h1 className='text-lg text-orange-400' >{job_type}</h1>

                        <div className='flex items-center gap-10'>

                            <h1 className=' flex items-center text-lg text-gray-600' ><span><MapPinIcon className='h-6 w-6'></MapPinIcon></span> {location}</h1>
                            <h1 className='flex items-center text-lg text-gray-600' ><span><CurrencyDollarIcon className='h-6 w-6'></CurrencyDollarIcon></span> {salary} per month</h1>
                        </div>
                    </div>
                 <div>
                 <Link to={`/jobs/${id}`} className='mt-20 w-64 border-none btn bg-gradient-to-r from-emerald-500 to-green-500'>View Details</Link>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Appliedjob;