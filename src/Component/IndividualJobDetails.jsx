import React, { useEffect } from 'react';
import { useState } from 'react';
import Lottie from "lottie-react";
import animation from '../assets/138485-3d-website-launch.json'
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const IndividualJobDetails = ({ params }) => {
    const jobs = useLoaderData()
    const jobId = useParams(params)
    const JobIdString = JSON.stringify(jobId)
    const JobIdNumber = parseInt(JobIdString[7])

    const [job, setJob] = useState({});
    useEffect(() => {
        const individualJobDetails = jobs.find(job => job.id === JobIdNumber)
        setJob(individualJobDetails)

    }, [])

    // console.log(JobIdNumber)
    // console.log(jobs)

    const handleApplyJob=( (id, company_logo, job_title, company_name, job_type, location, salary) =>{
       const appliedJobsDetails = {id,company_logo,job_title, company_name, job_type,location,salary};

       
        let alreadyApplied =[];
        const previouslyApplied= JSON.parse(localStorage.getItem('appliedjobs'));
        // console.log(previouslyApplied)
        if(previouslyApplied){
           if(previouslyApplied.find(jobId=>jobId.id===id)){
           toast.warn('You Have Already Applied', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,  
            theme: "light",
            });
            return;}
            alreadyApplied.push(...previouslyApplied,appliedJobsDetails)
          localStorage.setItem('appliedjobs', JSON.stringify(alreadyApplied));

        }
        else{ 
            toast.success('You have Applied Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,  
                theme: "light",
                });
          alreadyApplied.push(appliedJobsDetails)
          localStorage.setItem('appliedjobs', JSON.stringify(alreadyApplied));
        }
    })
    return (
        <div>

            {/* react toastify */}
            <ToastContainer />


            <div className='lg:px-28 my-2 lg:my-5 lg:mb-20'>
                {/* Job Details Header Section */}

                <section>
                    <div className='flex items-center justify-center gap-20 '>
                        <div className='lg:relative lg:left-44'>
                            <h1 className="text-4xl font-bold text-center ">Job Details</h1>
                        </div>
                        <div className='relative lg: left-44' >
                            <Lottie className=' h-72 relative ' animationData={animation} loop={true} />;

                        </div>
                    </div>
                </section>
                <section className='mt-10'>

                    {/* Job description section */}

                    <div className='flex justify-center items-center gap-10' >
                        <div>
                            <div className='mb-10'>
                                <h1 className="text-xl font-bold">Job Description <br /> <span className='text-gray-600 font-normal'>{job.job_description}</span></h1>
                            </div>
                            <div className='mb-10'>
                                <h1 className="text-xl font-bold">Job Responsibilities <br /> <span className='text-gray-600 font-normal'>{job.job_responsibilities}</span></h1>
                            </div>
                            <div className='mb-10'>
                                <h1 className="text-xl font-bold">Educational Requirement: <span className='text-gray-600 font-normal'>{job.educational_requirements}</span></h1>
                            </div>
                            <div className='mb-10'>
                                <h1 className="text-xl font-bold">Experience <br /> <span className='text-gray-600 font-normal'>{job.experiences}</span></h1>
                            </div>
                        </div>

                        {/* job details side section */}

                        <div className='bg-[#FF9433] text-white p-5 rounded-lg w-4/5'>
                            <div>
                                <h1 className="text-lg font-bold mb-3">Job Details</h1>
                                <hr />
                                <br />
                                <div className='flex items-center gap-2 mb-5'>
                                <CurrencyDollarIcon className='h-6'></CurrencyDollarIcon>
                                <h1 className="text-lg font-semibold">   Salary: <span className='text-normal text-white'>{job.salary} Per month</span></h1>
                                </div>
                                <div className='flex items-center gap-2 mb-5'>
                                <CalendarDaysIcon className='h-6'></CalendarDaysIcon>
                                <h1 className="text-lg font-semibold">  Job Title: <span className='text-normal text-white'>{job.job_title}</span></h1>
                                </div>
                            </div>
                            <div>
                            <h1 className="text-lg font-bold mb-3">Contact Information</h1>
                                <hr />
                                <br />
                                <div className='flex items-center gap-2 mb-5'>
                                <PhoneIcon className='h-6'></PhoneIcon>
                                <h1 className="text-lg font-semibold">   Phone: <span className='text-normal text-white'>{job.phone} </span></h1>
                                </div>
                                <div className='flex items-center gap-2 mb-5'>
                                <EnvelopeIcon className='h-6'></EnvelopeIcon>
                                <h1 className="text-lg font-semibold">  Email: <span className='text-normal text-white'>{job.email}</span></h1>
                                </div>
                                <div className='flex items-center gap-2 mb-5'>
                                <MapPinIcon className='h-6'></MapPinIcon>
                                <h1 className="text-lg font-semibold">  Location: <span className='text-normal text-white'>{job.location} </span></h1>
                                </div>
                                <br />
                            </div>
                                <button onClick={()=>handleApplyJob(job.id, job.company_logo, job.job_title, job.company_name, job.job_type, job.location, job.salary)} className='btn btn-warning w-full  mb-5 text-white font-bold'>Apply Now</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default IndividualJobDetails;