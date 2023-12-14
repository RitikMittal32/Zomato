import React from 'react'
import Footer from '../footer/footer'
import './Login.css';
import { useState } from 'react';

const Login = () => {

  const[username,SetUserName] = useState("0");
  const[password,SetPassword] = useState("4");
  
  return (
    <div className='login'>
      <div className='top-header'>

      </div>
      <div className='login-body'>
        <div className='box'>
        <div className='login-box'>
          <div className='login-text'><p>Login</p></div>
          <div className='single-line'></div>
          <div className='login-fields'>
            <div className='username-field'>
              <p className='utext'>Username : </p>
              <input type='text' value={username} className='username-input inputs' required/>
            </div>
            <div className='password-field'>
              <p className='utext'>Password : </p>
              <input type='password' value={password} className='password-input inputs' required/> 
            </div>
          </div>
          <div className='single-line'></div>
          <div className='google-authentication'>

          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
