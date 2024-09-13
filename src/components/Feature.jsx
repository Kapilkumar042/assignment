import React from 'react';
import { assets } from '../assets/assets';

const Feature = () => {
  return (
    <div className='mt-10 px-4 md:px-16'>
      <h1 className='text-4xl md:text-6xl font-medium text-center'>
        Why choose Gelato
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-12'>
        <div className='w-full md:w-[500px]'>
          <img className='w-full h-auto' src={assets.hero_2} alt="Feature" />
        </div>
        <div className='flex flex-col gap-4 md:ml-10'>
          <h4 className='text-xl md:text-2xl leading-tight'>
            ▻ World's largest print-on-demand network
          </h4>
          <p className='font-light leading-tight'>
            140+ print partners in 32 countries. Gelato is a truly global service.
          </p>
          <h4 className='text-xl md:text-2xl leading-tight'>
            ▻ Sell globally, produce locally
          </h4>
          <p className='font-light leading-tight'>
            Your products are produced close to your customers, wherever they are.
          </p>
          <h4 className='text-xl md:text-2xl leading-tight'>
            ▻ 100% free editing tools
          </h4>
          <p className='font-light leading-tight'>
            Create your custom products using our suite of free tools.
          </p>
          <h4 className='text-xl md:text-2xl leading-tight'>
            ▻ 60+ logistics partners
          </h4>
          <p className='font-light leading-tight'>
            Our global network of logistics partners ensures your products are delivered fast.
          </p>
          <h4 className='text-xl md:text-2xl leading-tight'>
            ▻ High-quality products
          </h4>
          <p className='font-light leading-tight'>
            We partner with the world's leading brands to ensure the best quality products.
          </p>
          <h4 className='text-xl md:text-2xl leading-tight'>
            ▻ Endless creativity with Shutterstock Images
          </h4>
          <p className='font-light leading-tight'>
            Access millions of images and graphics to create unique products you can sell in your store.
          </p>
          <h4 className='text-xl md:text-2xl leading-tight'>
            ▻ 1-click integration to the leading ecommerce platforms
          </h4>
          <p className='font-light leading-tight'>
            Connect your store to Gelato using our integrations with Shopify, Etsy, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
