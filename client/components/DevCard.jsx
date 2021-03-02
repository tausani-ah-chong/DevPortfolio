import React from 'react'
import { Link } from 'react-router-dom'

function DevCard ({ dev }) {
  return (
    <>
      <div className=" relative w-full h-72 lg:h-64">
        <Link to={`/dashboard/${dev.id}`}>
          {
            dev.projects.length
              ? <img src={dev.projects[0].projectImage} className='imgFit rounded-md'/>
              : <img src='/images/project-img/gabriel-gurrola-u6BPMXgURuI-unsplash-min.jpg' className="imgFit rounded-md"/>
          }
          <div className="  absolute bottom-0 h-20 w-full bg-transparent flex flex-row items-center pt-7">
            <img className= "rounded-full w-10 h-10 mx-3 mb-1" src={dev.profilePicture}/>
            <h4 className="self-center text-white text-lg">{`${dev.firstName} ${dev.lastName}`}</h4>
          </div>
        </Link>
      </div>
    </>
  )
}

export default DevCard
