import React , {useState, useEffect} from 'react'
import '../css/Nav.css'
import Avatar from '../assets/avatar.jpg'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [showNav, SetShowNav] = useState(0);
  const navigate = useNavigate();
  
  // function that hide and show nav bar while scrolling
  const toggleNav = ()=>{
    if(window.scrollY > 100){
      SetShowNav(1);
    }else{
      SetShowNav(0);
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', toggleNav);
    return () => window.removeEventListener('scroll', toggleNav)
  }, [])
  return (
    <div className={` Nav ${showNav && 'Nav_black'}`}>
      <div className='Nav_contents'>
        {/* the logo */}
          <div onClick={()=>{
          navigate('/')
        }}  className='Nav_logo'>FLICKHUB</div>
        {/* the avatar */}
        <img
        onClick={()=>{
          navigate('/profile')
        }} 
        className='Nav_avatar' src={Avatar} alt="" />
      </div>
    </div>
  )
}

export default Nav
