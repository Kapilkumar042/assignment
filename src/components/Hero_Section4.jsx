import React from 'react';
import { assets } from '../assets/assets';

const Hero_Section4 = () => {
  return (
    <div className='px-4 md:px-20 py-10 bg-[#FAF6EF]'>
      <div className='flex flex-col md:flex-row gap-8 mt-16 '>
        {/* Image Container */}
        <div className='w-full md:w-1/2'>
          <img className='w-full h-auto' src={assets.hero_5} alt="GelatoConnect at Printing United" />
        </div>
        {/* Text Container */}
        <div className='text-center md:text-left md:pl-8 w-full md:w-1/2'>
          <h1 className='text-4xl md:text-6xl text-left font-medium leading-tight'>
            Meet <br /> GelatoConnect <br /> at Printing <br /> United
          </h1>
          <p className='text-base md:text-xl text-left font-light leading-tight pt-5'>
            Meet us at Printing United from September 10-12 in Las Vegas. <br />
            Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving <br />
            success for businesses like yours.
          </p>
          <div className="mt-6 text-left">
          <button className=' bg-black text-white px-4 py-2 rounded-full hover:bg-gray-700'>
            Book a Meeting
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero_Section4;
