import React from 'react'
import { Link } from 'react-router-dom'

function DevCard ({ dev }) {
  return (
    <>
      <div className="group relative w-full lg:h-64 hover-trigger">
        <Link to={`/dashboard/${dev.id}`}>
          <div className='h-full w-full absolute rounded-md bg-gradient-to-t from-black to-transparent opacity-90 hover-target'></div>
          {
            dev.projects.length
              ? <img src={dev.projects[0].projectImage} className='imgFit rounded-md' />
              : <img className='imgFit rounded-md' src="https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Abstract-Backgrounds.jpg"/>
          }
          <div className=" absolute bottom-0 h-20 w-full flex flex-row items-center pt-7">
            {dev.profilePicture
              ? <img className="rounded-full group-hover:w-20 lg:w-8 mx-3 mb-1 opacity-50 group-hover:opacity-100" src={dev.profilePicture} />
              : <img className="rounded-full group-hover:w-20 lg:w-8 mx-3 mb-1 opacity-50 group-hover:opacity-100" src='https://www.appliedlogistics.co.nz/wp-content/uploads/2018/01/person-placeholder-300x300.jpg' />
            }
            <h4 className="self-center text-gray-300 group-hover:text-white text-normal">{`${dev.firstName} ${dev.lastName}`}</h4>
          </div>
        </Link>
      </div>
    </>
  )
}

export default DevCard
