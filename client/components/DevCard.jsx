import React from 'react'

function DevCard ({ dev }) {
  return (
    <>
      <div className="group relative w-full lg:h-64 hover-trigger">
        <div className='h-full w-full absolute rounded-md bg-gradient-to-t from-black to-transparent opacity-90 hover-target'></div>
        {
          dev.projects.length
            ? <img src={dev.projects[0].projectImage} className='imgFit rounded-md'/>
            : <img src='/images/project-img/gabriel-gurrola-u6BPMXgURuI-unsplash-min.jpg' className="imgFit rounded-md"/>
        }
        <div className=" absolute bottom-0 h-20 w-full flex flex-row items-center pt-7">
          <img className= "rounded-full w-10 h-10 mx-3 mb-1 opacity-50 group-hover:opacity-100" src={dev.profilePicture}/>
          <h4 className="self-center text-gray-300 group-hover:text-white text-lg">{`${dev.firstName} ${dev.lastName}`}</h4>
        </div>

      </div>
    </>
  )
}

export default DevCard
