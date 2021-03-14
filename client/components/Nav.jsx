import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <nav className="w-full h-12 flex items-center xl:px-6 lg:mb-2 xl:mb-1">
        <div className="w-full grid grid-cols-2">
          <div className='my-auto'>
            <Link to='/explore'>
              <button className="xl:text-xl lg:text-lg font-extrabold my-auto hover:text-blue-400">DevPortfolio</button>
            </Link>
          </div>
          <div>
            <span className="flex relative order-1">
              <div className="flex items-center ml-auto">
                <button className="lg:font-medium xl:font-semibold mx-6 inline hover:text-blue-400 lg:text-base">Log in</button>
                <button className="flex items-center xl:ml-2 hover:bg-blue-400 bg-blue-200 rounded-md lg:h-8 px-3 lg:font-medium xl:font-semibold focus:outline-none lg:text-base">Sign Up</button>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
