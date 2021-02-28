import React, { useRef, useState } from 'react'
// import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function AuthSignup () {
  // const { signup } = useAuth()
  // const emailRef = useRef()
  // const passwordRef = useRef()
  // const passwordConfirmRef = useRef()
  // const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)
  // const history = useHistory()

  // async function signupHandler (e) {
  //   e.preventDefault()

  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     setError('Passwords do not match')
  //   }

  //   try {
  //     setError('')
  //     setLoading(true)
  //     await signup(emailRef.current.value, passwordRef.current.value)
  //     history.push('/')
  //   } catch {
  //     setError('Failed to create an account')
  //   }
  //   setLoading(false)
  // }

  return (
    <>
      <h1>Sign up!</h1>
      <form >
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' name='email' required/>

        <label htmlFor='password'>Password</label>
        <input id='password' type='password' name='password' required/>

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input id='confirmPassword' type='password' name='confirmPassword' required/>

        <Link to='/get-started'>
          <button>Sign Up</button>
        </Link>

      </form>

      <p>Already have an account? <Link to='/login'><button>Log In</button></Link></p>
    </>
  )
}

export default AuthSignup

// signup stage 1 (AuthSignup)

// email
// password
// confirm password

// sign up stage 2 PersonalSignup.jsx

// first name
// last name
// pronoun
// profile picture
// bio

// sign up stage 3 MoreInfoSignup

// languages --buttons for selecting lang or highlight all
// platforms --buttons for selecting platforms or highlight all

// projects --maybe do this on dashboard and not signup

// backend get dev by id
// where user id is id insert info for plat, lang and proj into join table
