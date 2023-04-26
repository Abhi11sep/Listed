import React from 'react'
import { GoogleLoginButton, AppleLoginButton } from "react-social-login-buttons";
import { LoginSocialApple, LoginSocialGoogle } from "reactjs-social-login";
import './SignIn.css'

const SignIn = () => {

  return (
    <div className='main-section'>
      <div className='section-A1'>
        <h1 id='board'>Board.</h1>
      </div>
      <div className='section-B'>
        <h1 className='heading'>Sign In</h1>
        <p className='sub-heading'>Sign in to your account</p>
        <div className='sign-top'>
          <div>
            <LoginSocialGoogle
              client_id={"123214448374-cu1k37v3h1vnflp23rhuajnccco4lvbq.apps.googleusercontent.com"}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }) => {
                console.log(provider, data);
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
          </div>

          <div>
            <LoginSocialApple
              client_id={"123214448374-cu1k37v3h1vnflp23rhuajnccco4lvbq.apps.googleusercontent.com"}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }) => {
                console.log(provider, data);
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <AppleLoginButton />
            </LoginSocialApple>
          </div>
        </div>

        <div id='form'>
          <p>E-mail address</p>
          <input type='text' placeholder='Enter E-mail here' />
          <p>Password</p>
          <input type='password' placeholder='Enter password here' />
          <p className='forgot'>Forgot password? </p>
          <button>Sign In</button>
        </div>
        <div>

        </div>

        <p>Don't have an account? <a className='register'>Register here </a></p>

      </div>
    </div>
  )
}

export default SignIn