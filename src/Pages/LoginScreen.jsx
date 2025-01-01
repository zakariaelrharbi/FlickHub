import React from 'react'
import '../css/LoginScreen.css';


const LoginScreen = () => {
  return (
    <div className='loginScreen'>
      <div className="loginScreen_background">
        <div className='loginScreen_logo'>FLICKHUB</div>
        <button className='loginScreen_btn'>Sign In</button>
        <div className='loginScreen_gradient'></div>
      </div>
    </div>
  )
}

export default LoginScreen
