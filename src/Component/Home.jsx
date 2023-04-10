import React from 'react';
import Header from './Header';
import JobCatagory from './JobCatagory';
import FeatureJobs from './FeatureJobs';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <JobCatagory></JobCatagory>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;