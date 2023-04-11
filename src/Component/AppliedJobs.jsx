import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    const appliedjobs = JSON.parse(localStorage.getItem('appliedjobs'));
   console.log(appliedjobs)

    // const AppliedJobsId = 
    // console.log(AppliedJobsId)
    // console.log(appieldjob)

    return (
        <div>
 
    


        </div>
    );
};

export default AppliedJobs;