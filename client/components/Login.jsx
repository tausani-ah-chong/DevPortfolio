import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit (e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/dashboard')
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <>
      <h1>Sign up!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' ref={emailRef} name='email' required />

        <label htmlFor='password'>Password</label>
        <input id='password' type='password' ref={passwordRef} name='password' required />

        <button disabled={loading}>Log In</button>
      </form>

      <p>Don&#39;t have an account?<Link to='/signup'><button>Sign Up</button></Link></p>
    </>
  )
}
