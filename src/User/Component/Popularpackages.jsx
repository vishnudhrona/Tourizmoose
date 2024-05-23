import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Popularpackages = () => {
    return (
        <div>
            <div className='flex justify-between px-5'>
                <h1 className='font-semibold text-[20px] text-popular_packages'>Popular Packages</h1>
                <Link>
                    <div className='flex items-center gap-2'>
                        <span className='text-gray-700'>View all</span> <HiOutlineArrowNarrowRight />
                    </div>
                </Link>
            </div>
            <span className='px-5 text-sm text-popular_packages'>Explore places with our budget friendly packages.</span>

            <div className='px-5 py-5'>
                <Link className='border border-black px-5 py-5 bg-gray-400'>
                <div className='flex h-44'>
                    <img src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />


                </div>
                </Link>
            </div>

        </div>
    )
}

export default Popularpackages
