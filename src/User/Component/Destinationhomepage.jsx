import React, { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y'


const Destinationhomepage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const destinations = [
        { src: '/destination1.svg', label: 'Eco', text: 'MEESAPULIMALA', text1: 'peak in kerala' },
        { src: '/destination2.svg', label: 'Adventure', text: 'Kollengode', text1: 'Most beatiful village in kerala' },
        { src: '/destination3.svg', label: 'Medical', text: 'Varkala Beach', text1: 'Beach in kerala' },
        { src: '/destination4.svg', label: 'Heritage', text: 'Kochi', text1: 'City in kerala' },
    ];

    return (
        <>
            <div className='destination'>
                <div className='md:px-24 px-5 pt-8 pb-5 '>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-white text-[20px] md:text-[30px] font-semibold'>Treading Destinations</h1>
                        <Link>
                            <div className='inline-flex items-center text-white gap-1 text-sm font-light'>
                                <span>View all</span><HiOutlineArrowNarrowRight />
                            </div>
                        </Link>
                    </div>
                    <p className='text-white font-light text-[15px] md:text-[18px] leading-[27px] md:pb-5'>Explore treading tourist destinations</p>
                </div>
                {isMobile ? (

                <Swiper
                    modules={[A11y]}
                    spaceBetween={0}
                    slidesPerView={2.2}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='swiper-container'>
                    {destinations.map((value, index) => (
                        <SwiperSlide key={index} className='pl-5 gap-0'>
                            <img className='object-cover h-52 rounded-2xl' src={value.src} alt="" />
                            <div className='absolute bottom-2 left-8 top-36 text-white text-sm md:text-lg font-light'>
                                <div className='grid'>

                                    <span>{value.text}</span>
                                    <span>{value.text1}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                ) : (
                    <div className='md:flex md:items-center md:justify-center md:px-20'>
                        {destinations.map((value, index) => (
                            <div key={index} className='relative pl-5 gap-0'>
                                <img className='relative object-cover h-52  lg:h-[388px] lg:w-[310px] rounded-2xl' src={value.src} alt="" />
                                <div className='absolute bottom-2 left-8 text-white text-sm font-light'>
                                <div className='grid'>
                                    <span className='lg:text-[25px] lg:font-semibold lg:leading-[38px]'>{value.text}</span>
                                    <span className='lg:text-[16px] lg:font-[400]'>{value.text1}</span>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Destinationhomepage
