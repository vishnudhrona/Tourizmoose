import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Avatarhomepage = () => {
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

  const avatars = [
    { src: '/avatareco.svg', label: 'Eco' },
    { src: '/avataradv.svg', label: 'Adventure' },
    { src: '/avatarmed.svg', label: 'Medical' },
    { src: '/avatarheritage.svg', label: 'Heritage' },
    { src: '/avatarpilgrim.svg', label: 'Pilgrim' },
    { src: '/avatarhoneymoon.svg', label: 'Honeymoon' },
    { src: '/avatareco.svg', label: 'Eco' },
    { src: '/avataradv.svg', label: 'Adventure' },
  ];

  return (
    <div className='md:grid md:items-center md:justify-center pt-20 md:pt-5 md:pb-14 pb-6'>
      <h1 className='font-bold text-avatar_heading text-xl mb-5 px-5 md:mb-0 md:py-8'>Explore</h1>

      {/* <div className='overflow-x-scroll overflow-y-hidden hide-scrollbar'>
      <div className='flex relative gap-x-3'> */}
      {isMobile ? (
      <Swiper
      modules={[]}
      spaceBetween={50}
      slidesPerView={3.5}
      navigation
      className='swiper-container px-10'
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {avatars.map((avat, index) => (
        <SwiperSlide key={index} className='flex flex-col items-center relative'>
          <div className="w-20 h-20 rounded-full overflow-hidden">
        <img className='w-full h-full object-cover' src={avat.src} alt={avat.label} />
          </div>
          <span className='font-bold text-xs pt-2'>{avat.label}</span>
        </SwiperSlide>
        ))}
        </Swiper>
      ) : (
        <div className='md:flex gap-4 md:gap-2 md:px-5'>
        {avatars.map((avat, index) => (
          <div key={index} className='flex flex-col items-center relative'>
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 rounded-full overflow-hidden">
              <img className='w-full h-full object-cover' src={avat.src} alt={avat.label} />
            </div>
            <span className='font-bold text-xs pt-2'>{avat.label}</span>
          </div>
        ))}
      </div>
      )}
      </div>
    //   </div>
    // </div>
  )
}

export default Avatarhomepage
