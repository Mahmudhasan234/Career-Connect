import React from 'react';

const SIngleJobs = ({job}) => {
    const {name, logo, jobs_available} = job;
    
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default SIngleJobs;