import React from 'react'

function Banner () {
  return (
    <div className="w-screen h-80 bg-red-400 flex justify-center" >
      <div className="align-middle ">
        <h2 className="text-5xl my-6">find your next job, find your next dev</h2>
        <h4 className="text-xl my-6"> DevPortfolio, connecting those who want with those who need</h4>
        <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 ">Sign Up</button>
      </div>
    </div>
  )
}

export default Banner
