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
            <h2>Watch anywhere, Cancel at anytime</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
            <div className="loginScreen_input">
              <form>
                <input type='email' placeholder='Email Adress' />
                <button className='loginScreen_Input_Button'>Get Started</button>
              </form>
            </div>
        </>
      </div>
    </div>
  )
}

export default LoginScreen
