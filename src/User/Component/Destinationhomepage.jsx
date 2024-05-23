import React, { useState } from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Destinationhomepage = () => {
    const [destination, setDestination] = useState([1,2,3,4])
    return (
        <>
        <div className=' py-5 md:px-14'>
            <div className='flex justify-between text-white px-5'>
                <h1 className='font-semibold text-[20px]'>Treanding Destinations</h1>
                <Link>
                    <div className='flex items-center gap-2'>
                        <span>View all</span> <HiOutlineArrowNarrowRight />
                    </div>
                </Link>
            </div>
            <span className='px-5 text-white text-sm'>Explore trending tourist destination</span>
            <div className='flex px-5 py-5 md:py-10 gap-4 md:overflow-x-hidden overflow-x-scroll overflow-y-hidden hide-scrollbar'>
            {destination.map((value, index) => (
                <img key={index} className='w-44 h-52 md:w-72 md:h-96 object-cover rounded-2xl' src="https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2021/7/22/meesapulimala.jpg" alt="" />
            ))}
            </div>
        </div>
        </>
    )
}

export default Destinationhomepage
