import React from 'react'

function DevCard ({ dev }) {
  return (
    <>
      <div className=" relative w-full h-64 bg-green-300 rounded-md">
        <div className=" absolute bottom-0 h-20 w-full bg-transparent flex flex-row">
          <img src={dev.profile_picture} className=" rounded-full bg-red-400 w-14 h-14 m-4"></img>
          {/* <h4 className="self-center ml-6">{dev.first_name}</h4> */}
        </div>
      </div>
    </>
  )
}

export default DevCard
