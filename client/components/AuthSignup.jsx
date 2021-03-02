import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function AuthSignup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit (e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      console.log('inside sign up')
      await signup(emailRef.current.value, passwordRef.current.value)
        .then(result => history.push(`/get-started/${result}`))
    } catch {
      console.log('inside error')
      setError('Failed to sign up')
    }

    setLoading(false)
  }

  return (
    <>
      <h1><strong>Sign Up</strong></h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor='email'>Email</label>
        <input id='email' type='email' ref={emailRef} name='email' required />

        <label htmlFor='password'>Password</label>
        <input id='password' type='password' ref={passwordRef} name='password' required />

        <label htmlFor='confirm-password'>Confirm Password</label>
        <input id='confirm-password' type='password' ref={passwordConfirmRef} name='confirm-password' required />

        <button disabled={loading}>Sign Up</button>
      </form>

      <p>Already have an account?<Link to='/login'><button>Log In</button></Link></p>
    </>
  )
}

export default AuthSignup
