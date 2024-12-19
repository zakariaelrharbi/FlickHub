import React from 'react'
import '../css/Nav.css'
import Logo from '../assets/FLICKHUB.png'
import Avatar from '../assets/avatar.jpg'

const Nav = () => {
  return (
    <div className='Nav'>
      <div className='Nav_contents'>
        {/* the logo */}
          <img className='Nav_logo' src={Logo} alt="" />
        {/* the avatar */}
        <img className='Nav_avatar' src={Avatar} alt="" />
      </div>
    </div>
  )
}

export default Nav
