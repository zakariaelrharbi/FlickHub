import React from 'react'
import '../css/SignInPage.css'

const SignInPage = () => {
  return (
    <>
        <div className="Sign_InScreen">
            <form>
                <input type="email" placeholder='Your Email' />
                <input type="password" placeholder='**********' />
                <button type='submit'>Sign In</button>
            </form>

        </div>
    </>
  )
}

export default SignInPage
