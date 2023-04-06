import React from 'react';
import error from '../../assets/error.json'
import Lottie from "lottie-react";

const Error = () => {
    return (
        <div className='h-screen w-screen'>
            <Lottie animationData={error} loop={true} className='h-full w-full'></Lottie>
        </div>
    );
};

export default Error;