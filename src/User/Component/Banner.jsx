import React from 'react'

const Banner = () => {
  return (
    <div className='h-634 flex items-center justify-center gap-0 rounded-b-3xl left-0 top-0'
      style={{
        backgroundImage: `url(${'/bannerbackgroundimage.svg'})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className='text-center md:block hidden'>
        <h1 className='h-24 font-extrabold text-7xl leading-relaxed text-white'>Let's go Places</h1>
        <p className='h-[27px] font-bold text-4xl leading-normal text-banner_text'>Explore places with Touris mooze</p>
        <div className='flex gap-4 justify-center mt-16'>
          <button className="px-4 py-2 bg-banner_button text-white rounded-full">PICK A PACKAGE</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full">PLAN YOUR TRIP</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
