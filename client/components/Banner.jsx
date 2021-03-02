import React from 'react'
import TemplateProfileCarousel from './templates/TemplateProfileCarousel'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Banner () {
  const { currentUser } = useAuth()

  return (
    <div className="w-full h-96 bg-gray-100 grid grid-cols-2 rounded-md" >
      <div className="ml-44">

        <h2 className=" font-Poppins italic font-bold xl:text-6xl lg:text-4xl  text-cgrey my-6">Find your next job, </h2>
        <h2 className=" font-Poppins italic font-bold xl:text-6xl lg:text-4xl text-cgrey my-6">Find your next dev</h2>
        <h4 className="xl:text-2xl lg:text-xl font-medium my-6"> DevPortfolio, connecting those who want with those who need</h4>
        {currentUser ? null
          : <Link to='/signup'>
            <button type="button" className="buttonNoMargin">Sign up</button>
          </Link>
        }
      </div>

      <div className="order-2 aspect-w-16 aspect-h-9 rounded-md">
        {/* <TemplateProfileCarousel/> */}
        <div className="h-0 pt-p">
          <img className="h-5/6 w-5/6 absolute top-0 left-0 lg:ml-12 xl:ml-10 lg:mt-5 object-cover rounded-md" src='/images/placeholder-img/pic1.jpg'/>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
