import React, { useState } from 'react'
import '../css/loginScreen.css'
import SignInPage from './SignInPage';

const LoginScreen = () => {
  const[signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className="loginScreen_background">
        <div className='loginScreen_logo'>FLICKHUB</div>
        <button onClick={() => setSignIn(true)} className='loginScreen_btn'>Sign In</button>
        <div className='loginScreen_gradient'></div>
      </div>
      <div className="loginScreen_body">
        {
          signIn ? <SignInPage/> :
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere, Cancel at anytime</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
            <div className="loginScreen_input">
              <form>
                <input type='email' placeholder='Email Adress' />
                <button onClick={()=> setSignIn(true)} className='loginScreen_Input_Button'>Get Started</button>
              </form>
            </div>
        </>
        }
      </div>
    </div>
  )
}

export default LoginScreen
