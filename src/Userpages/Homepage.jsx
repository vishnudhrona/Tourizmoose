import React from 'react'
import Navbar from '../User/Component/Navbar'
import Banner from '../User/Component/Banner'
import Avatarhomepage from '../User/Component/Avatarhomepage'
import Destinationhomepage from '../User/Component/Destinationhomepage'
import Popularpackages from '../User/Component/Popularpackages'
import More from '../User/Component/More'
import Footer from '../User/Component/Footer'
import Adv from '../User/Component/Adv'
import Footermd from '../User/Component/Footermd'

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
        <Destinationhomepage />
        <Popularpackages />
        <More />
        <Adv />
        <Footer />
        <Footermd />
      </div>
    </>
  )
}

export default Homepage
