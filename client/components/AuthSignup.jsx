import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function AuthSignup (props) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function signupHandler (e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/get-started')
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }
  return (
    <>
      <h1>Sign up!</h1>
      <form onSubmit={signupHandler}>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' ref={emailRef} name='email' required/>

        <label htmlFor='password'>Password</label>
        <input id='password' type='password' ref={passwordRef} name='password' required/>

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input id='confirmPassword' type='password' ref={passwordConfirmRef} name='confirmPassword' required/>
        <button disabled={loading}>Sign Up</button>
      </form>
      <p>Already have an account? <Link to='/login'><button>Log In</button></Link></p>
    </>
  )
}

export default AuthSignup
