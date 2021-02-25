import React from 'react'

export default function Template () {
  return (
    <>
      <h1>template</h1>
      <div className="h-20 w-screen bg-black" ></div>
      <div className="container border-black bg-red-400 w-screen h-screen">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <div className="w-full h-max md:w-1/3 xl:w-1/4 p-6 flex flex-col bg-white"></div>
        </div>
      </div>
    </>
  )
}
