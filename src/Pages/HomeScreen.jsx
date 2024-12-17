import React from 'react'
import '../css/HomeScreen.css'
import Nav from '../Components/Nav'
import Banner from '../Components/Banner'
import Rows from '../Components/Rows'

const HomeScreen = () => {
  return (
    <div className='HomeScreen'>
      {/* Nav */}
        <Nav/>
      {/* Banner */}
        <Banner/>
      {/* Rows */}
        <Rows/>
    </div>
  )
}

export default HomeScreen
