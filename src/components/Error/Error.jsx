import React from 'react';
import error from '../../assets/error.json'
import Lottie from "lottie-react";

const Error = () => {
    return (
        <div className='bg-[#3A1740]'>
            <Lottie animationData={error} loop={true} className='h-screen w-full'></Lottie>
        </div>
    );
};

export default Error;