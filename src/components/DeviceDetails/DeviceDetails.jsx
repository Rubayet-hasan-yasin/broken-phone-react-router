import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DeviceDetails = () => {
    const data = useLoaderData();
    const { brand, image, mainFeatures, name, others, releaseDate } = data.data
    console.log(data);

    // let key = Object.entries(others)
    // console.log(key);
    return (
        <div className='flex max-w-screen-xl mx-auto mt-20 justify-evenly'>
            <img src={image} alt="" className='w-80 h-fit'/>
            <div className='text-left'>

                <h3 className='text-2xl font-semibold'>
                    <span className='mr-4'>Model: </span> {name}
                </h3>

                <h3 className='text-sm font-semibold'>
                    <span className='mr-4 text-3xl text-blue-500'>Other: </span>
                    {Object.keys(others).map((value, key) => (
                        <p key={key}>
                            <span className='font-bold text-lg'>{value}</span> : {others[value]}
                        </p>


                    ))}
                </h3>

                <h3 className=''>
                    <span className='text-3xl font-semibold text-blue-500'>MainFeatures</span>
                    {
                        Object.keys(mainFeatures).map((value, key) =>(
                            <p key={key}>
                                <span className='font-bold text-lg'>{value}</span> : {mainFeatures[value]}

                            </p>
                        ))
                    }
                </h3>

                <h3 className='text-xl font-semibold'>
                    <span className='mr-4'>Brand:</span> {brand}
                </h3>

            </div>
        </div>
    );
};

export default DeviceDetails;