import React, { useRef } from 'react';
import '../css/SignInPage.css';
import { auth } from '../firebase';

const SignInPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passwordRef.current.value) {
      alert("Please fill in both email and password.");
      return;
    }
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((userAuth) => {
      console.log(userAuth);
    })
    .catch((error) => {
      alert(error.message);
    });
  };

  const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((userAuth) => {
      console.log('Logged in:', userAuth);
    })
    .catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="Sign_InScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Your Email" autoComplete="email" aria-label="Email" />
        <input ref={passwordRef} type="password" placeholder="**********" autoComplete="current-password" aria-label="Password" />
        <button type="submit" onClick={login}>Sign In</button>
        <h4>
          <span className="Sign_InScreen_gray">New To Flickhub?</span>
          <span className="Sign_InScreen_white" onClick={register}>Sign Up Now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignInPage;
