import React from 'react';
import { Link } from 'react-router-dom';

const PhoneCard = ({ phone }) => {
    const { brand, image, phone_name, slug } = phone
    // console.log(phone);
    return (
        <Link to={`/device/${slug}`} className='mx-auto shadow-2xl px-5 py-4 relative rounded'>
            <img src={image} alt="" className='object-cover'/>
            <div className='absolute inset-0 px-5 py-5 bg-black bg-opacity-50 opacity-0 hover:opacity-100 text-white font-bold flex flex-col text-xl'>
                <h3>{brand}</h3>
                <h2>{phone_name}</h2>
            </div>

        </Link>
    );
};

export default PhoneCard;