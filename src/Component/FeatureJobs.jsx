import React, { useEffect, useState } from 'react';
import IndividualJobs from './IndividualJobs';


const FeatureJobs = () => {

    const[featureJobs, setFeatureJobs]= useState([]);
const [showAllJobs, setShowAllJobs] = useState(false);
const handleShowAllJobs = ()=>{
    setShowAllJobs(true);
}
    useEffect(()=>{
        fetch('featureJobs.json')
        .then(res=>res.json())
        .then(data=> setFeatureJobs(data))
    },[])
    
          
        
    return (
        <div>
            <div className='flex flex-col items-center lg:px-28 my-2 lg:my-5 lg:mb-20'>
            <div>
                <h1 className="text-4xl font-bold text-center mt-36 mb-10 mx-5">Featured Jobs</h1>
                <h1 className="text-xl text-gray-500 font-semibold text-center mx-5 mb-10">Explore thousands of job opportunities with all the information you need. Its your future</h1>
            </div>
                <div className='lg:grid lg:grid-cols-2 gap-52'>
                {
                    featureJobs.slice(0,showAllJobs? 6:4 ).map(job=><IndividualJobs key={job.id} 
                    job={job}
                   ></IndividualJobs>)
                }
                   
                </div>
                <div>
                <button onClick={handleShowAllJobs} className=' mt-20 lg:w-64 border-none btn bg-gradient-to-r from-emerald-500 to-green-500'> See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureJobs;