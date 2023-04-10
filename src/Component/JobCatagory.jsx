import React, { useEffect, useState } from 'react';
import SIngleJobs from './SIngleJobs';

const JobCatagory = () => {
    const [jobs, setJobs] =useState([])
    useEffect(()=>{
        fetch('catagoryList.json')
        .then(res=> res.json())
        .then (data => setJobs(data))
    },[])
    return (
        <div>
           <div className='container mx-auto lg:px-28 my-2 lg:my-5'>
            <div>
                <h1 className="text-4xl font-bold text-center mb-10 mx-5">Job Category List</h1>
                <h1 className="text-xl text-gray-500 font-semibold text-center mx-5 mb-10">Explore thousands of job opportunities with all the information you need. Its your future</h1>
            </div>
            <div className='lg:flex justify-evenly items-center mt-5'>
            {
                jobs.map(job=><SIngleJobs key={job.id} job={job}></SIngleJobs>)
            }
            </div>
           </div>
        </div>
    );
};

export default JobCatagory;