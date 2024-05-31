import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Pagination, A11y, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';


const Userlogin = () => {

    const swiper = useSwiper()

    const backGroundImage = [
        { src: '/loginMd.svg', label: 'Tourism' },
        { src: '/otpMd.svg', label: 'Eco tourism' }
    ]

    return (
        <>
            <div className='bg-gray-500 flex justify-center items-center h-screen'>
                <div className='flex border rounded-[1.5rem] bg-white'>
                    <Swiper
                        modules={[Pagination, A11y]}
                        spaceBetween={0}
                        slidesPerView='auto'
                        navigation
                        className='swiper-container z-50'
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {backGroundImage.map((value, index) => (
                            <SwiperSlide key={index} className='relative z-10'>
                                    <div className='relative'>
                                    <img className='h-[478px] w-[324px] object-cover' src={value.src} alt={value.label} />
                                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold'>
                                        {value.label}
                                    </div>
                            </div>
                                </SwiperSlide>
                        ))}
                        <div className=''>
                        </div>
                    </Swiper>
                    <div className='grid grid-rows-3 items-center justify-center p-4'>
                        <img src="/loginpagelogoMd.svg" alt="" className='mb-4' />
                        <button className='swiper-button-prev bg-blue-500 text-white p-2 rounded-lg m-2' onClick={() => swiper.slidePrev()}>Prev</button>
                        <button className='swiper-button-next bg-blue-500 text-white p-2 rounded-lg m-2' onClick={() => swiper.slideNext()}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userlogin
