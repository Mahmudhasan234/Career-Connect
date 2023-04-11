import React from 'react';
import Lottie from "lottie-react";
import animation404 from '../assets/55873-404-error-page.json'
const ErrorPage = () => {
    return (
        <div>
           
            <Lottie className='h-96 m-44 ' animationData={animation404} loop={true} />;
        </div>
    );
};

export default ErrorPage;