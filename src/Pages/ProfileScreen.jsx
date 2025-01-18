import React from 'react'
import '../css/ProfileScreen.css';
import Nav from '../Components/Nav'
import Avatar from '../assets/avatar.jpg'
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';


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
              <button>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
