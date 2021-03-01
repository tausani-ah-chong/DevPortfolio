import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
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
      <div className="w-full p-6 flex ">
        <div className=" flex-col mx-auto bg-gray-200 rounded-md p-6 m-4">
          <form>
            <div className="mb-3">
              <input className="inputBox placeHolderText" placeholder="Email" id='email' type='email' name='email' required></input>
              <hr className="border-black mb-4 "></hr>
            </div>

            <div className="mb-3">
              <input className="inputBox placeHolderText" placeholder="Password" id='password' type='password' name='password' required></input>
              <hr className="border-black mb-4 "></hr>
            </div>

            <div className="mb-3">
              <input className="inputBox placeHolderText" placeholder="Confirm Password" id='confirmPassword' type='password' name='confirmPassword' required></input>
              <hr className="border-black mb-4 "></hr>
            </div>

            <Link to='/get-started'>
              <button className="flex items-center hover:bg-blue-400 bg-blue-200 rounded-md h-10 mb-3 px-3 font-semibold tracking-wide">Sign Up</button>
            </Link>
          </form>
          <p>Already have an account? <Link to='/login'><a className="hover:text-blue-400">Log In</a></Link></p>
        </div>
      </div>
    </>
  )
}

export default AuthSignup
