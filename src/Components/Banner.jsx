import React from 'react'
import '../css/Banner.css'
import ImageBanner from '../assets/banner.webp'

const Banner = () => {
  return (
    <header className='Banner'
    style={{
      backgroundImage:{ImageBanner},
      backgroundSize:'cover',
      backgroundPosition:'center center',
    }}>
      
    </header>
  )
}

export default Banner
