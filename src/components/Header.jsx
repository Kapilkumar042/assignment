import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex flex-wrap items-center justify-between px-4 py-3 md:px-20 md:py-4 sticky top-0 w-full bg-white z-50'>
      {/* Logo Section */}
      <div className='w-1/2 md:w-auto'>
        <img className='w-24 md:w-32' src={assets.logo} alt="Logo" />
      </div>

      {/* Hamburger menu for mobile */}
      <div className='block md:hidden'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-gray-700 focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex gap-8 items-center`}>
        <ul className='flex flex-col md:flex-row gap-4 font-medium items-center'>
          <NavLink to='/contact-us' className='flex items-center gap-1 hover:bg-gray-200 rounded-full px-2 py-1'>
            <img className='w-6' src={assets.contact_icon} alt="Contact Icon" />
            <li>Contact us</li>
          </NavLink>
          <NavLink to='/in-inr' className='flex items-center gap-1 hover:bg-gray-200 rounded-full px-2 py-1'>
            <img className='w-6' src={assets.web_icon} alt="Currency Icon" />
            <li>IN/INR</li>
          </NavLink>
          <NavLink to='/cart' className='flex items-center gap-1 hover:bg-gray-200 rounded-full px-2 py-1'>
            <img className='w-6' src={assets.cart} alt="Cart Icon" />
            <li>Cart</li>
          </NavLink>
          <NavLink to='/sign-in' className='flex items-center gap-1 hover:bg-gray-200 rounded-full px-2 py-1'>
            <img className='w-6' src={assets.user_icon} alt="User Icon" />
            <li>Sign in</li>
          </NavLink>
        </ul>

        {/* Sign up Button */}
        <div className='mt-3 md:mt-0'>
          <button className='bg-black text-white px-4 py-2 rounded-full hover:text-gray-400'>
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
