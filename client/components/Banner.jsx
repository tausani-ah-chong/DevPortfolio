import React from 'react'

function Banner () {
  return (
    <div className="w-screen h-80 grid grid-cols-2 p-10" >
      <div className="ml-44">
        <h2 className=" font-Poppins italic font-bold text-6xl text-cgrey my-6">Find your next job, </h2>
        <h2 className=" font-Poppins italic font-bold text-6xl text-cgrey my-6">Find your next dev</h2>
        <h4 className="text-2xl font-medium my-6"> DevPortfolio, connecting those who want with those who need</h4>
        <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 ">Sign Up</button>
      </div>
    </div>
  )
}

export default Banner
