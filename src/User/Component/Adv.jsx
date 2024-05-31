import React from 'react'
import { Link } from 'react-router-dom'

const Adv = () => {
  return (
    <div className='bg-advTransparent py-1 hidden md:block relative px-20'>
      <img className='absolute w-[900.4px] h-[726.56px] ml-52 left-48' src="/adv.svg" alt="" />
      <div className='half-gradient h-[423px] mt-52'>
        <div className='flex px-20'>

          <div className='w-[350px] py-10'>
            <h1 className='text-[40px] font-[700] leading-[60px] text-white pb-5'>Plan your trip from your pocket.</h1>
            <p className='text-[18px] font-[400] leading-[27px] text-white'>Yes! you heard it right, now plan your vacation from your pocket, we Tourise mooze presenting you the feature rich mobile app for traveling.</p>
          </div>

          <div className='w-[350px] py-36 pl-10 ml-auto'>
            <p className='text-[18px] font-[400] leading-[27px] text-white'>Download our feature rich mobile applications via App store & Play store for completely free...</p>
            <p className='text-[18px] font-[700] leading-[27px] text-white pt-5'>Plan your trip now !</p>
            <div className='flex gap-8 pt-5'>
            <Link>
            <img src="/apple.svg" alt="" />
            </Link>
            <Link>
            <img src="/playstore.svg" alt="" />
            </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Adv
