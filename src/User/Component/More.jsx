import React from 'react'
import { Link } from 'react-router-dom'

const More = () => {
    return (
        <div className='px-5 lg:px-20 lg:py-20'>
            <h1 className='text-avatar_heading text-xl font-bold lg:text-[30px] md:text[20px] lg:font-[30px] md:font-[30px] lg:leading-[45px] md:leading-[40px] lg:pb-10'>What's more?</h1>
            <div className='flex md:items-center md:justify-center lg:gap-5 gap-3 py-5'>
                <Link to={'#'} className='relative bg-moreBg rounded-xl w-[170px] h-[140px] lg:w-[646px] lg:h-[355px] md:w-[546px] md:h-[285px]'>
                    <img className='pl-6 py-4 lg:w-72 lg:h-72 md:w-56  md:h-56 md:ml-52 md:mt-12 lg:ml-52 lg:mt-12' src="/more.svg" alt="" />
                    <div className='absolute inline-grid bottom-2 left-2 lg:text-[25px] md:text-[20px] lg:font-[600] md:font-[600] lg:leading-[38px] md:leading-[33px] lg:px-10 md:px-10 md:py-10 text-white font-semibold'>
                        <p>View All</p>
                        <p>Packages</p>
                </div>
                    </Link>
                <Link className='relative bg-moreBg1 rounded-xl w-[170px] h-[140px]  lg:w-[646px] lg:h-[355px] md:w-[546px] md:h-[285px]'>
                    <img className='pl-6 py-4 lg:w-72 lg:h-72 md:w-56  md:h-56 md:ml-52 md:mt-12 lg:ml-52 lg:mt-12' src="/more1.svg" alt="" />
                    <div className='absolute inline-grid bottom-2 left-2 lg:text-[25px] lg:font-[600] lg:leading-[38px] lg:px-10 lg:py-10 md:text-[20px] md:font-[600] md:leading-[33px] md:px-10 md:py-10 text-white font-semibold'>
                        <p>View All</p>
                        <p>Destinations</p>
                    </div>
                    {/* <img className='absolute left-10 py-4' src="/more1.svg" alt="" /> */}
                </Link>

            </div>
        </div>
    )
}

export default More
