import React from 'react'

export default function TemplateNav () {
  return (
    <>
      <div className="h-10 w-full relative bg-blue-600 grid grid-cols-2 gap-10">
        <h1 className="order-1 absolute left-0">DevPortfolio</h1>
        <nav className="order-2 flex-row ">
          <p className="absolute right-24 mx-6" >Sign In</p>
          <p className="absolute right-3 mx-6">Sign Up</p>
        </nav>

      </div>

    </>
  )
}
