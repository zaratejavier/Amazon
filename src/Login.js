import React, { useState } from "react"
import { Link } from "react-router-dom"
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()

    //do firebase stuff here for the signin
  }

  const register = (e) => {
    e.preventDefault()

    //do firebase stuff here for the register
  }
  
  return (
    <div className="login">
      <Link to='/'>
        <img className="login__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          
          <h5>Password</h5>
          <input
            type='text'
            value={password}
            onChange={e => setPassword(e.target.value)}
          
          />

          <button type="submit" onClick={signIn} className='login__signInButton'>Sign in</button>
        </form>

        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
        </p>
        
        <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
      </div>
    </div>
    
)
}

export default Login