import React from 'react'
import Navbar from '../User/Component/Navbar'
import Banner from '../User/Component/Banner'
import Avatarhomepage from '../User/Component/Avatarhomepage'
import Destinationhomepage from '../User/Component/Destinationhomepage'
import Popularpackages from '../User/Component/Popularpackages'

const Homepage = () => {
  return (
    <>
      <div style={{
        backgroundImage: `url(${'/homepagebackground.svg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
          width: '100%',
      }}>
        <Navbar />
        <Banner />
        <Avatarhomepage />
        <div className='destination'>
        <Destinationhomepage />
        </div>
        <Popularpackages />
      </div>
    </>
  )
}

export default Homepage
