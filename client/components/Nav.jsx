import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
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

      <nav className="w-full h-12 p-3 ">
        <div className="w-full grid grid-cols-2">
          <h1 className="text-xl font-semibold my-auto ">DevPortfolio</h1>
          <span className="flex relative order-1">
            {/* <a href='' className="font-semibold mx-6 inline absolute right-0 hover:text-blue-500">Sign In</a> */}
            <Link to='/login'>
              <button type="button" className="flex items-center absolute right-0 mx-6 bg-blue-200 rounded-md h-10 px-3 font-semibold">Sign in</button>
            </Link>
            <Link to='/signup'>
              <button className="font-semibold mx-6 inline absolute right-32 hover:text-blue-200">Sign Up</button>
            </Link>
          </span>

        </div>
      </nav>

    </>
  )
}

export default Nav
