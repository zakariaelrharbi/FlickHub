import React , {useState} from 'react'
import '../css/Nav.css'
import Avatar from '../assets/avatar.jpg'

const Nav = () => {
  const [show, SetShow] = useState(0);
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
