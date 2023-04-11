import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Appliedjob from './Appliedjob';

const AppliedJobs = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    const appliedjobs = JSON.parse(localStorage.getItem('appliedjobs'));
   

    // const AppliedJobsId = 
    // console.log(AppliedJobsId)
    // console.log(appieldjob)

    return (
        <div>
 
    {
        appliedjobs.map(appliedjob => <Appliedjob appliedjob={appliedjob}
        jobs={jobs}></Appliedjob>)
    }


        </div>
    );
};

export default AppliedJobs;