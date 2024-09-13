import React from 'react';
import { assets } from '../assets/assets';

const Hero_Section2 = () => {
  return (
    <div className='px-4 md:px-20 py-10 bg-[#FAF6EF]'>
      <div className='flex flex-col-reverse md:flex-row items-center gap-8 mt-16'>
        <div className='text-center md:text-left md:pl-8 w-full md:w-1/2'>
          <p className='text-lg md:text-xl text-left'>For print on demand sellers</p>
          <h1 className='text-3xl md:text-6xl text-left font-medium leading-tight'>
            Accelerate <br /> business growth <br /> with innovative <br /> design tools and <br /> apps
          </h1>
          <p className='text-base md:text-2xl text-left leading-tight pt-5'>
            See how our cutting-edge solutions can <br /> help you reach new customers and <br /> maximize your profits.
          </p>
          <div className='mt-6 text-left'>
            <button className='bg-black text-white px-4 py-2 rounded-full hover:bg-gray-700'>
              Get Started
            </button>
          </div>
        </div>
        <div className='flex justify-center md:justify-start w-full md:w-1/2'>
          <img className='w-full h-auto' src={assets.hero_3} alt="Innovative design tools" />
        </div>
      </div>
    </div>
  );
}

export default Hero_Section2;
