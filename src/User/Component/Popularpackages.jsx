import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { RiArrowDropRightFill } from 'react-icons/ri';
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom'

const Popularpackages = () => {
    const card = [
        { src: '/card.svg', label: 'Eco', text: 'MEESAPULIMALA', text1: 'peak in kerala' },
        { src: '/card1.svg', label: 'Adventure', text: 'Kollengode', text1: 'Most beatiful village in kerala' },
        { src: '/card2.svg', label: 'Medical', text: 'Varkala Beach', text1: 'Beach in kerala' },
        { src: '/card3.svg', label: 'Heritage', text: 'Kochi', text1: 'City in kerala' },
        { src: '/card3.svg', label: 'Heritage', text: 'Kochi', text1: 'City in kerala' }
    ];
    return (
        <div className=''>
            <div className='px-5 pt-8 pb-5 lg:px-20 lg:pt-20'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[20px] lg:text-[30px] lg:font-[600] lg:leading-[45px] text-popular_packages font-bold'>Popular Packages</h1>
                    <Link>
                        <div className='inline-flex items-center gap-1 lg:gap-3 text-sm lg:text-[20px] lg:font-[400] font-light'>
                            <span className='text-gray-600'>View all</span><HiOutlineArrowNarrowRight />
                        </div>
                    </Link>
                </div>
                <p className='font-light text-popular_packages text-sm lg:text-[18px] lg:font-[400] lg:leading-[45px] font-serif leading-[20px]'>Explore places with our budget friendly packages.</p>
            </div>
           
            <div className='lg:grid lg:items-center md:justify-center grid-cols-1 px-5 lg:px-20 lg:gap-y-7 lg:gap-x-10 lg:grid-cols-2 py-3'>
            {card.map((value, index) => (
                <Link key={index} className=''>
                    <div className='flex h-44 lg:w-[600px] lg:h-[300px] bg-gray-200 px-1 py-1 mb-5 lg:mb-0 border border-gray-400 rounded-3xl'>
                        <img className='rounded-3xl w-1/3 object-cover' src={value.src} alt="" />
                        <div className='flex flex-col justify-center ml-4 w-2/3'>
                            <p className='font-bold text-lg lg:text-[30px] lg:font[600] lg:leading-[45px] text-card_text md:py-2 pb-3'>Explore<br />Kuttanadu</p>
                            <p className='inline-flex items-center text-[10px] lg:text-[16px] lg:font-[400] pb-2 text-card_text font-semibold flex-wrap lg:leading-[45px]'>
                                <span>2 nights</span>
                                <RiArrowDropRightFill />
                                <span>Alappuzha (1)</span>
                                <RiArrowDropRightFill />
                                <span>Kumarakom (1)</span>
                                <span> + 4 Cities</span>
                            </p>   
                            <p className='inline-flex items-center text-gray-700 lg:text-gray-500 flex-wrap pb-2 lg:leading-[24px]'>

                                <GoDotFill  className='w-1 h-1 lg:w-3 lg:h-3 bg-card_text2 text-card_text2 rounded-full mr-2'/>
                                <span className=' mr-2 text-[8px] lg:text-[16px]'>Night in House boat</span>


                                <GoDotFill  className='w-1 h-1 lg:w-3 lg:h-3 bg-card_text2 text-card_text2 rounded-full mr-2'/>
                                <span className=' mr-2 text-[8px] lg:text-[16px]'>Traditional kerala food</span>

                                <GoDotFill  className='w-1 h-1 lg:w-3 lg:h-3 bg-card_text2 text-card_text2 rounded-full mr-2'/>
                                <span className=' mr-2 text-[8px] lg:text-[16px]'>Back to waters</span>

                                <GoDotFill  className='w-1 h-1 lg:w-3 lg:h-3 bg-card_text2 text-card_text2 rounded-full mr-2'/>
                                <span className=' mr-2 text-[8px] lg:text-[16px] lg:font[400]'>Activities</span>

                            </p>    
                             
                         <div className='flex justify-between md:pt-7'>
                         <div className="relative flex items-center">
                            <span className='font-extrabold text-xl lg:text-[30px] lg:font-[800] text-card_text'>₹ 15000</span>
                            <span className="text-[8px] lg:text-[15px] text-card_text mt-3">/person</span>
                        </div>
                            <button className='bg-card_button lg:w-[161.25px] lg:h-[54.97px] lg:mb-2 lg:text-sm px-1 text-xs text-white rounded-r-2xl rounded-t-none'>Know more</button>              
                         </div>
                         </div>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Popularpackages
