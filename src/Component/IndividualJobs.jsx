import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const IndividualJobs = ({ job}) => {
    const {id, company_logo, job_title, company_name, job_type, location, salary } = job
   
    return (
        <div>
            <div>
                <img className='h-64 w-64 object-cover mb-5' src={company_logo} alt="" />
                <h1 className='text-4xl font-bold mb-5'>{job_title}</h1>
                <h1 className="text-gray-500 font-semibold text-2xl mb-3">{company_name}</h1>
                <h1 className="text-gray-500 font-semibold text-lg">{job_type}</h1>

                <div className='flex items-center gap-5 mt-3'>
                    <h1 className=" flex  items-center gap-2 text-gray-500 text-lg"><span><MapPinIcon className='h5 w-5 text-gray-500'></MapPinIcon></span>{location}</h1>
                    <h1 className="flex  items-center gap-2  text-gray-500 text-lg"><span><MapPinIcon className='h5 w-5 text-gray-500'></MapPinIcon></span> {salary}</h1>
                </div>
                <Link  to={`jobs/${id}`} className=' mt-7 border-none btn bg-gradient-to-r from-emerald-500 to-green-500'> View Details</Link >


            </div>
        </div>
    );
};

export default IndividualJobs; <h1>my jobs</h1>