import React, { useRef } from 'react'
import '../css/SignInPage.css'
import { auth } from '../firebase';
const SignInPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailandPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((userAuth)=>{
      console.log(userAuth)
    }).catch((error) => {
      alert(error.message);
    });
  
  }
  const login = (e) => {
    e.preventDefault();
  }
  


  return (
    <>
        <div className="Sign_InScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='Your Email' />
                <input ref={passwordRef} type="password" placeholder='**********' />
                <button type='submit' onClick={login}>Sign In</button>
                <h4><span className='Sign_InScreen_gray'>New To Flickhub?</span> <span  className='Sign_InScreen_white' onClick={register}>Sign Up Now.</span></h4>
            </form>

        </div>
    </>
  )
}

export default SignInPage
