import React from 'react';

const SIngleJobs = ({ job }) => {
    const { name, logo, jobs_available } = job;

    return (
        <div className=' mr-10 h-52 w-full rounded-lg p-1'>
            <div className='flex flex-col justify-center items-center bg-white h-full w-full rounded-lg'>
            <h1 className='font-bold'>{name}</h1>
            <img className='h-20 w-20 rounded' src={logo} alt="" />
            <h1 className='text-gray-500 font-semibold'>{jobs_available}</h1>
            </div>
        </div>
    );
};

export default SIngleJobs;