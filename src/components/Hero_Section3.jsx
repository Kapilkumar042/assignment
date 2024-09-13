import React from 'react';
import { assets } from '../assets/assets';

const Hero_Section3 = () => {
  return (
    <div className='px-4 md:px-20 py-10'>
      <div className='flex flex-col md:flex-row items-center gap-8 mt-10'>
        <div className='flex justify-center md:justify-start w-full md:w-1/2'>
          <img className='w-full md:w-[554px] h-auto' src={assets.hero_4} alt="GelatoConnect" />
        </div>
        <div className='w-full md:w-1/2 md:pl-8'>
          <p className='text-lg md:text-xl pt-6 md:pt-0'>For print producers</p>
          <h1 className='text-3xl md:text-6xl font-medium leading-tight'>
            GelatoConnect
          </h1>
          <p className='text-lg md:text-2xl leading-tight pt-5'>
            Elevate efficiency, cut costs, and <br /> seamlessly automate with our all-in-one <br /> software solution for the print industry
          </p>
          <div className='mt-6 text-left'>
            <button className='bg-black text-white px-4 py-2 rounded-full hover:bg-gray-700'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero_Section3;
