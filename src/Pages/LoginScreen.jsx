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
      <div className="loginScreen_body">
        <>
            <h1>Unlimited movies, TV shows, and more.</h1>
        </>
      </div>
    </div>
  )
}

export default LoginScreen
