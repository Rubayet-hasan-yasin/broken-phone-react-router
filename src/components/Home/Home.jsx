import React from 'react';
import { Link } from 'react-router-dom';
import animation from '../../assets/animation.json'
import Lottie from "lottie-react";


const Home = () => {
    return (
        <div className='max-w-7xl mx-auto mt-24 grid md:grid-cols-2'>
            <div>
                <h1 className='text-6xl font-bold'>
                    Discover the Latest Smartphones at our Online Store
                </h1>

                <h4 className='my-6 text-xl font-bold text-blue-500'>Stay Connected with Cutting-Edge Technology and Unbeatable Deals on Top Brands</h4>

                <p className='text-slate-500 font-semibold mb-10'>
                    At our online phone store, we strive to offer our customers the latest and greatest in smartphone technology. Our selection of phones includes a wide variety of brands, from Apple to Samsung to Google, and everything in between.
                    <br />
                    We understand that staying connected to the world around you is more important now than ever, and we aim to make that as easy as possible for our customers.
                </p>

                <Link to='shop' className='px-14 py-2 border-2 border-blue-500 rounded-full hover:border-black font-bold'>
                    Shop Now
                </Link>

            </div>
            <div>
                <Lottie animationData={animation} loop={true} />
            </div>

        </div>
    );
};

export default Home;