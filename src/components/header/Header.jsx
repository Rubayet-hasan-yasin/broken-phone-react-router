import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PhoneIcon } from '@heroicons/react/24/solid'
import { handleSearchValue } from '../../utility/utility';

const Header = () => {
    return (
        <nav className='bg-slate-200 p-5'>
            <div className='flex justify-between max-w-7xl mx-auto'>
                <div className='flex items-center gap-2'>
                    <PhoneIcon className="h-10 w-10 text-blue-500" />
                    <Link to='/' className='text-3xl font-bold'>PhonePalooza</Link>
                </div>

                <div>
                    <input onChange={e=> handleSearchValue(e)} type="text" placeholder='Search' className="px-4 py-1 rounded" />
                </div>

                <ul className='flex space-x-8 text-xl'>
                    <li>
                        <NavLink 
                        to='/'
                        className={({ isActive }) => isActive ? 'active' : 'default'}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='shop'
                        className={({ isActive }) => isActive ? 'active' : 'default'}
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='order'
                        className={({ isActive }) => isActive ? 'active' : 'default'}
                        >
                            Order
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='about'
                        className={({ isActive }) => isActive ? 'active' : 'default'}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;