import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Nav () {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState('')
  async function handleLogOut () {
    try {
      await logout()
      history.push('/login')
    } catch {
      setError('failed to logout')
    }
  }

  return (
    <>
      {/* <div className="h-auto bg-blue-200 w-full relative grid grid-cols-2 gap-10 items-center p-3">
        <nav className="">
          <h1 className="text-xl order-1 absolute left-0 ">DevPortfolio</h1>
          <div className="order-2 flex-row">
            <p className="absolute right-24 mx-6" >Sign In</p>
            <p className="absolute right-3 mx-6">Sign Up</p>
          </div>
        </nav>
      </div> */}

      <nav className="w-full h-12 flex items-center xl:px-6 lg:mb-2 xl:mb-1">
        <div className="w-full grid grid-cols-2">
<<<<<<< HEAD
          <div className='my-auto'>
            <Link to='/explore'>
              <h1 className="xl:text-xl lg:text-lg font-extrabold my-auto hover:text-blue-400">DevPortfolio</h1>
            </Link>
          </div>
          <span className="flex relative order-1">
            <div className="flex items-center ml-auto">
              <Link to='/signup'>
                <button className="lg:font-medium xl:font-semibold mx-6 inline hover:text-blue-400 lg:text-base">Sign Up</button>
              </Link>
              <Link to='/login'>
                <button type="button" className="flex items-center xl:ml-2 hover:bg-blue-400 bg-blue-200 rounded-md lg:h-8 px-3 lg:font-medium xl:font-semibold focus:outline-none lg:text-base">Sign in</button>
              </Link>
            </div>
          </span>

||||||| 611fd9b
          <Link to='/explore'>
            <h1 className="xl:text-xl lg:text-lg font-semibold my-auto hover:text-blue-400">DevPortfolio</h1>
          </Link>
          <span className="flex relative order-1">
            {/* <a href='' className="font-semibold mx-6 inline absolute right-0 hover:text-blue-500">Sign In</a> */}
            <Link to='/login'>
              <button type="button" className="buttonBlue absolute right-0 xl:text-lg lg:text-base">Sign in</button>
            </Link>
            <Link to='/signup'>
              <button className="font-semibold mx-6 inline absolute right-32 hover:text-blue-400 xl:text-lg lg:text-base">Sign Up</button>
            </Link>
          </span>

=======
          <Link to='/explore'>
            <h1 className="xl:text-xl lg:text-lg font-semibold my-auto hover:text-blue-400">DevPortfolio</h1>
          </Link>
          {currentUser ? <span className="flex relative order-1"><button onClick={handleLogOut} className="buttonBlue absolute right-0 xl:text-lg lg:text-base">Log Out</button></span>
            : <span className="flex relative order-1">
              {/* <a href='' className="font-semibold mx-6 inline absolute right-0 hover:text-blue-500">Sign In</a> */}
              <Link to='/login'>
                <button className="buttonBlue absolute right-0 xl:text-lg lg:text-base">Sign in</button>
              </Link>
              <Link to='/signup'>
                <button className="font-semibold mx-6 inline absolute right-32 hover:text-blue-400 xl:text-lg lg:text-base">Sign Up</button>
              </Link>
            </span>
          }
>>>>>>> dev
        </div>
      </nav>

    </>
  )
}

export default Nav
