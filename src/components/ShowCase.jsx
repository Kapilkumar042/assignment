import React from 'react'

const ShowCase = () => {
  return (
    <div className='hidden lg:flex justify-between items-center px-28 py-12 mt-10 bg-[#FAF6EF]'>
        <div className="flex flex-col">
            <p className='text-2xl items-center m-auto'>90% </p> <p className='text-2xl text-center'>of all orders are <br /> produced locally</p>
        </div>
        <div className="flex flex-col">
            <p className='text-2xl items-center m-auto'>90% </p><p className='text-2xl items-center m-auto text-center'> of orders arrive within 5 <br /> days of ordering</p>
        </div>
        <div className="flex flex-col">
            <p className='text-2xl items-center m-auto'>140+ </p><p className='text-2xl items-center m-auto text-center'> print providers across <br /> 32 countries</p>
        </div>
    </div>
  )
}

export default ShowCase