import React from 'react'
import '../css/Nav.css'
import Logo from '../assets/FLICKHUB.png'
import Avatar from '../assets/avatar.jpg'

const Nav = () => {
  return (
    <div className='Nav'>
        {/* the logo */}
          <img src={Logo} alt="" />
      This is the nav
        {/* the avatar */}
        <img src={Avatar} alt="" />
    </div>
  )
}

export default Nav
