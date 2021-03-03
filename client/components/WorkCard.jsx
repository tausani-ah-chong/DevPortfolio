import React from 'react'

export default function WorkCard ({ name, image }) {
  return (

    <div className=" relative w-full h-64 rounded-md hover-trigger">
      <div className='h-full w-full absolute rounded-md bg-gradient-to-t from-black to-transparent opacity-50 z-10 hover-target'></div>
      <img className=" relative w-full h-64 rounded-md" src={image} alt=""/>
      <div className="absolute bottom-0 h-20 w-full bg-transparent flex flex-row items-center pt-7">
        <h2 className="absolute bottom-0 mb-2 ml-2 text-lg text-white font-normal z-20">{name}</h2>
      </div>
    </div>

  )
}
