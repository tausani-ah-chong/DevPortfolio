import React from 'react'

export default function DevCard () {
  return (
    <>

      <div className=" relative w-full h-64 bg-green-300 rounded-md">
        <div className=" absolute bottom-0 h-20 w-full bg-indigo-100 flex flex-row">
          <div className=" rounded-full bg-red-400 w-14 h-14 m-4"></div>
          <h4 className="self-center ml-6">DEV NAME</h4>
        </div>
      </div>
    </>
  )
}
