import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [phones, setPhones] = useState([])

    useEffect(()=>{
        const url = `https://openapi.programming-hero.com/api/phones?search=s`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setPhones(data))

    },[])
    return (
        <div>
            SHop
        </div>
    );
};

export default Shop;