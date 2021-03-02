import React from 'react'

export default function LandingPage () {
  return (
    <>
      <div className='h-screen w-full flex items-center pb-32 '>
        <div className='w-full lg:h-72  flex justify-center'>
          <div className=' lg:w-96 ml-auto pt-10 '>
            <button className=>Dev</button>
            <h1 className='lg:text-5xl lg:font-extrabold mb-6'>Portfolio.</h1>
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
