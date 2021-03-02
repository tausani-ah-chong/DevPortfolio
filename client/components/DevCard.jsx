import React from 'react'
import { Link } from 'react-router-dom'

function DevCard ({ dev }) {
  return (
    <>
      <div className="group relative w-full lg:h-64 hover-trigger">
        <div className='h-full w-full absolute rounded-md bg-gradient-to-t from-black to-transparent opacity-90 hover-target'></div>
        <Link to={`/dashboard/${dev.id}`}>
          {
            dev.projects.length
              ? <img src={dev.projects[0].projectImage} className='imgFit rounded-md' />
              : <img src='/images/project-img/gabriel-gurrola-u6BPMXgURuI-unsplash-min.jpg' className="imgFit rounded-md" />
          }
          <div className=" absolute bottom-0 h-20 w-full flex flex-row items-center pt-7">
            <img className="rounded-full group-hover:w-20 lg:w-8 mx-3 mb-1 opacity-50 group-hover:opacity-100" src={dev.profilePicture} />
            <h4 className="self-center text-gray-300 group-hover:text-white text-normal">{`${dev.firstName} ${dev.lastName}`}</h4>
          </div>
        </Link>
      </div>
    </>
  )
}

export default DevCard
