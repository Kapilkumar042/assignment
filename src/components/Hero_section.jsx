import React from 'react'
import { assets } from '../assets/assets'

const Hero_section = () => {
  return (
    <div>
      <div className='flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 mt-10'>
        {/* Text Section */}
        <div className='px-6 md:px-14 mt-6 md:mt-0 text-left'>
          <h1 className='text-4xl md:text-6xl font-medium leading-tight'>
            Print on demand <br className='hidden md:block' /> for your <br className='hidden md:block' /> ecommerce <br className='hidden md:block' /> business
          </h1>
          <p className='text-2xl md:text-3xl pt-4 md:pt-6'>
            Sign up for free and only pay for what you sell
          </p>
          <p className='font-light text-lg md:text-xl pt-3'>
            Turn your passion into profit with the world's largest print on demand network.
          </p>

          <div className='flex flex-col md:flex-row gap-4 pt-6'>
            <button className='bg-black text-white px-6 py-2 rounded-full hover:text-gray-400'>
              Get started for free
            </button>
            <button className='border border-gray-300 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-400'>
              See our products
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className=''>
          <img className='w-[320px] md:w-[540px] mx-auto' src={assets.hero_1} alt="Hero" />
        </div>
      </div>

      {/* Ratings and Logo Section */}
      <div className='px-6 md:px-28 pt-10 text-left'>
  {/* Sofiphy logo aligned to the left on all screens */}
  <img className='w-[120px] md:w-[175px] mx-0' src={assets.sofiphy} alt="Sofiphy logo" />

  {/* Rating section aligned to the left */}
  <div className='flex gap-1 pt-2'>
    <img className='w-5' src={assets.rating} alt="Rating" />
    <img className='w-5' src={assets.rating} alt="Rating" />
    <img className='w-5' src={assets.rating} alt="Rating" />
    <img className='w-5' src={assets.rating} alt="Rating" />
    <img className='w-5' src={assets.rating} alt="Rating" />
    <p className='pl-2'>4.8 / 5</p>
  </div>

  {/* Review text */}
  <p className='pt-1 text-gray-500'>based on 887 reviews</p>
</div>

    </div>
  )
}

export default Hero_section
