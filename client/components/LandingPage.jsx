import React from 'react'

export default function LandingPage () {
  return (
    <>
      <div className='h-screen w-full flex items-center lg:pb-32 '>
        <div className='w-full lg:h-72  flex justify-center'>
          <div className=' lg:w-96 ml-auto pt-10 '>
            <div className='flex'>
              <button className='flex items-center bg-blue-200 rounded-md lg:h-10 px-3 lg:mr-1 lg:mt-1 text-white font-extrabold lg:text-4xl focus:outline-none'>Dev</button>
              <h1 className='lg:text-5xl lg:font-extrabold mb-6'>Portfolio.</h1>
            </div>
            <h1 className='lg:text-3xl font-bold mb-6'>welcome to the future</h1>
            <h2 className='lg:text-xl font-semibold'>we help developers connect with the world</h2>
            <button className='buttonNoMargin mt-3'>Get Started</button>
          </div>
          <div className='mr-auto'>
            <img className='lg:h-72 w-auto' src='/images/placeholder-img/landingPage.png'></img>
          </div>
        </div>

      </div>
    </>
  )
}
