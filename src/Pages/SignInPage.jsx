import React from 'react'
import '../css/SignInPage.css'

const SignInPage = () => {

  const register = (e) => {
    e.preventDefault();
  }
  const login = (e) => {
    e.preventDefault();
  }
  


  return (
    <>
        <div className="Sign_InScreen">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Your Email' />
                <input type="password" placeholder='**********' />
                <button type='submit' onClick={login}>Sign In</button>
                <h4><span className='Sign_InScreen_gray'>New To Flickhub?</span> <span  className='Sign_InScreen_white' onClick={register}>Sign Up Now.</span></h4>
            </form>

        </div>
    </>
  )
}

export default SignInPage
