import React from 'react'
import '../css/Nav.css'
import Avatar from '../assets/avatar.jpg'

const Nav = () => {
  return (
    <div className='Nav Nav_black'>
      <div className='Nav_contents'>
        {/* the logo */}
          <div className='Nav_logo'>FLICKHUB</div>
        {/* the avatar */}
        <img className='Nav_avatar' src={Avatar} alt="" />
      </div>
    </div>
  )
}

export default Nav
