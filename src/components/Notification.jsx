import React from 'react'
import { assets } from '../assets/assets'

const Notification = () => {
  return (
    <div className='flex gap-3 items-center justify-center text-white p-2 bg-black'>
        <p className='underline text-[18px]'>FREE SHIPPING for orders over $300. Order today</p>
        <img  className='w-6 items-center' src={assets.notifi_icon} alt="" />
    </div>
  )
}

export default Notification