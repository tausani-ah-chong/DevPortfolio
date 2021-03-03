import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login () {
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
        .then(() => history.push('/explore'))
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <>
      <div className="w-full p-6 flex flex-col ">
        <div className='mx-auto w-32 h-20 px-1'>
          <h1 className="xl:text-4xl font-semibold mb-2">Log In</h1>
          <h1 className='text-red-500'>{error || null}</h1>
        </div>
        <div className=" flex-col mx-auto bg-gray-200 rounded-md p-6 m-4">
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <input className="inputBox placeHolderText" placeholder="Email" id='email' type='email' ref={emailRef} name='email' required />
              <hr className="border-black mb-4 "></hr>
            </div>

            <div className="mb-3">
              <input className="inputBox placeHolderText" placeholder="Password" id='password' type='password' ref={passwordRef} name='password' required />
              <hr className="border-black mb-4 "></hr>
            </div>

            <button disabled={loading} className="flex items-center hover:bg-blue-400 bg-blue-200 rounded-md h-10 mb-3 px-3 font-semibold tracking-wide">Log In</button>
          </form>

          <p>Don&#39;t have an account? <Link to='/signup'><button className="hover:text-blue-400">Sign Up</button></Link></p>
        </div>
      </div>
    </>
  )
}
