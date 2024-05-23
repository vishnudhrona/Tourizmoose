import React, { useState } from 'react'

const Avatarhomepage = () => {
  const [avatar, setAvatar] = useState([1,2,3,4,5,6,7,8])

  return (
    <div className='pb-5'>
      <h1 className='md:py-12 md:px-14 px-10 py-5 font-bold text-avatar_heading text-xl'>Explore</h1>
      <div className='overflow-x-scroll overflow-y-hidden hide-scrollbar'>
      <div className='flex relative'>
        {avatar.map((value, index) => (
        <div key={index} className='flex flex-col items-center relative pl-7'>
          <div className="w-20 h-20 md:w-40 md:h-40 rounded-full overflow-hidden">
        <img className='w-full h-full object-cover' src="https://karnatakatourism.org/wp-content/uploads/2021/04/world-heritage-day.jpg" alt="Eco" />
          </div>
          <span className='font-bold'>Adventure</span>
        </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Avatarhomepage
