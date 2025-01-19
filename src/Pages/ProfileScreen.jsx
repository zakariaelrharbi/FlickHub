import React from 'react'
import '../css/ProfileScreen.css';
import Nav from '../Components/Nav'
import Avatar from '../assets/avatar.jpg'
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';
import { auth } from '../firebase';


const ProfileScreen = () => {
  const user = useSelector(selectUser)

  return (
    <div className='profileScreen'>
      <Nav/>
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src={Avatar} alt="" />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>plans</h3>
              <button onClick={()=>
                auth.signOut()
              } className='profileScreen_signout'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
