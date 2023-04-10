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
           <div>
            {
                jobs.map(job=><SIngleJobs job={job}></SIngleJobs>)
            }
           </div>
        </div>
    );
};

export default JobCatagory;