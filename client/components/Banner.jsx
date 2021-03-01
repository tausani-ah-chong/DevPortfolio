import React from 'react'
import TemplateProfileCarousel from './templates/TemplateProfileCarousel'

function Banner () {
  return (
    <div className="w-screen h-auto grid grid-cols-2 p-10" >
      <div className="ml-44">
        <h2 className=" font-Poppins italic font-bold text-6xl text-cgrey my-6">Find your next job, </h2>
        <h2 className=" font-Poppins italic font-bold text-6xl text-cgrey my-6">Find your next dev</h2>
        <h4 className="text-2xl font-medium my-6"> DevPortfolio, connecting those who want with those who need</h4>
        <button type="button" className="buttonNoMargin">Sign up</button>
      </div>
      <div className="order-2 w-full h-full">
        {/* <img className="rounded-md h-96 w-auto" src='/images/placeholder-img/pic1.jpg'/> */}
        <TemplateProfileCarousel/>
      </div>
    </div>
  )
}

export default Banner
