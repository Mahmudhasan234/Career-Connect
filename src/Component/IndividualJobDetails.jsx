import React, { useEffect } from 'react';
import { useState } from 'react';
import Lottie from "lottie-react";
import animation from '../assets/138485-3d-website-launch.json'

import { useLoaderData, useParams } from 'react-router-dom';

const IndividualJobDetails = ({params}) => {
    const jobs = useLoaderData()
   const jobId = useParams(params)
   const JobIdString =JSON.stringify(jobId)
   const JobIdNumber =parseInt(JobIdString[7])

 const [job, setJob]= useState({});
 useEffect(()=>{
    const individualJobDetails = jobs.find(job => job.id === JobIdNumber)
    setJob(individualJobDetails)
    
 },[])
  
   console.log(JobIdNumber)
   console.log(jobs)
    
    return (
        <div>
            <div >
                <div>
               ;

                </div>
                <div>
                    <h1 className="text-4xl font-bold text-center">Job Details</h1>
                </div>

            </div>
        </div>
    );
};

export default IndividualJobDetails;