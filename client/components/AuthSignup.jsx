import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function AuthSignup () {
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
      await signup(emailRef.current.value, passwordRef.current.value)
        .then(result => history.push(`/get-started/${result}`))
    } catch {
      setError('Failed to sign up')
    }

    setLoading(false)
  }

  return (
    <>
      {/* <h1>{error || null}</h1> */}

      <div className="w-full p-6 flex flex-col">

        <div className='mx-auto lg:w-72 h-20 lg:pl-11 xl:pl-14 px-1'>
          <h1 className="lg:text-4xl font-semibold mb-2">Sign Up</h1>
          <h1 className='text-red-500'>{error || null}</h1>
        </div>

        <div className=" flex-col mx-auto bg-gray-200 rounded-md p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input ref={emailRef} className="inputBox placeHolderText" placeholder="Email" id='email' type='email' name='email' required></input>
              <hr className="border-black mb-4 "></hr>
            </div>

            <div className="mb-3">
              <input ref={passwordRef} className="inputBox placeHolderText" placeholder="Password" id='password' type='password' name='password' required></input>
              <hr className="border-black mb-4 "></hr>
            </div>

            <div className="mb-3">
              <input ref={passwordConfirmRef} className="inputBox placeHolderText" placeholder="Confirm Password" id='confirmPassword' type='password' name='confirmPassword' required></input>
              <hr className="border-black mb-4 "></hr>
            </div>
            <button disabled={loading} className="flex items-center hover:bg-blue-400 bg-blue-200 rounded-md h-10 mb-3 px-3 font-semibold tracking-wide outline-none">Sign Up</button>
          </form>
          <p>Already have an account? <Link to='/login'><button className="hover:text-blue-400">Log In</button></Link></p>
        </div>
      </div>
    </>
  )
}

export default AuthSignup
// TODO:
// the "sign up" title needs to move above the sign up box
