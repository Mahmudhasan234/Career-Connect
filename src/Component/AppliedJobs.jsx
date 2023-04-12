import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Appliedjob from './Appliedjob';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs]= useState([])
    const [onsiteJob, setOnsiteJob] = useState([])
    const [remoteJob, setRemoteJob] = useState()
    const handleOnsiteJob =()=>{
      setAppliedJobs(onsiteJob)
    }
    const handleRemoteJob =()=>{
      setAppliedJobs(remoteJob)
    }
    const jobs = useLoaderData()
    // console.log(jobs)
    useEffect(()=>{
        const appliedjobs = JSON.parse(localStorage.getItem('appliedjobs'));
        setAppliedJobs(appliedjobs)
    },[])
   useEffect(()=>{
    const allOnsiteJobs = JSON.parse(localStorage.getItem('appliedjobs'));
    const onsiteJobs = allOnsiteJobs.filter(onsitejobs => onsitejobs.remote_or_onsite=== 'Onsite') ;
    setOnsiteJob(onsiteJobs)
},[])
   useEffect(()=>{
    const allRemoteJobs = JSON.parse(localStorage.getItem('appliedjobs'));
    const remoteJobs = allRemoteJobs.filter(remotejobs => remotejobs.remote_or_onsite=== 'Remote') ;
    setRemoteJob(remoteJobs)
},[])
console.log(onsiteJob) 
console.log(remoteJob) 
console.log(appliedJobs)
    // const AppliedJobsId = 
    // console.log(AppliedJobsId)
    // console.log(appieldjob)

    return (
        <div>
            <div>
                <div className="dropdown relative left-3/4">
                    <label tabIndex={0} className="btn btn-ghost m-1">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={handleOnsiteJob}>Onsite</a></li>
                        <li><a onClick={handleRemoteJob}>Remote</a></li>
                    </ul>
                </div>
            </div>
 
    {
   appliedJobs.map(appliedjob => <Appliedjob appliedjob={appliedjob}
                jobs={jobs}></Appliedjob>)
    }


        </div>
    );
};

export default AppliedJobs;