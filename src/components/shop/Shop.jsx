import React, { useEffect, useState } from 'react';
import PhoneCard from '../phoneCard/PhoneCard';

const Shop = () => {
    const [phones, setPhones] = useState([])

    useEffect(()=>{
        const url = `https://openapi.programming-hero.com/api/phones?search=s`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setPhones(data.data))

    },[])
    return (
        <div className='max-w-7xl mx-auto grid md:grid-cols-4 gap-8 my-9'>
            {
                phones.map(phone=> <PhoneCard key={phone.slug} phone={phone}></PhoneCard>)

            }
        </div>
    );
};

export default Shop;