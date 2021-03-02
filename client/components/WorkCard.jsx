import React from 'react'

export default function WorkCard ({ devs }) {
  return (
    <div className=" relative w-full h-64 rounded-md">
      {
        devs[0].projects.length ? (<img className=" relative w-full h-64 rounded-md" src={devs[0].projects[0].projectImage} alt=""/>) : null
      }
      <div className="absolute bottom-0 h-20 w-full bg-transparent flex flex-row items-center pt-7">
        {
          devs[0].projects.length ? (<h2 className="absolute bottom-0 mb-2 ml-2 text-xl text-white font-bold">{devs[0].projects[0].projectName}</h2>) : null
        }
      </div>
    </div>

  )
}
