import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
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

      <nav className="w-full h-12 flex items-center">
        <div className="w-full grid grid-cols-2">
          <Link to="/">
            <h1 className="text-xl font-semibold my-auto hover:text-blue-400">DevPortfolio</h1>
          </Link>
          <span className= "flex relative order-1">
            <button type="button" className="buttonBlue absolute right-0 text-lg">Sign in</button>
            <a href='' className="font-semibold mx-6 inline absolute right-32 hover:text-blue-400 text-lg">Sign Up</a>
          </span>

        </div>
      </nav>

    </>
  )
}

export default Nav
