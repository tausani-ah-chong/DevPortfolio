import React from 'react'

export default function LandingPage () {
  return (
    <>
      <div className='h-screen w-full flex items-center lg:pb-32 xl:pb-80 '>
        <div className='w-full lg:h-72 xl:h-96 flex justify-center'>
          <div className=' lg:w-96 lg:ml-auto lg:pt-10 xl:pt-20 '>
            <div className='flex'>
              <button disabled='true' className='flex items-center bg-blue-200 rounded-md lg:h-10 xl:h-12 px-3 lg:mr-1 lg:mt-1 text-white font-extrabold lg:text-4xl focus:outline-none'>Dev</button>
              <h1 className='lg:text-5xl xl:text-6xl lg:font-extrabold lg:mb-6'>Portfolio.</h1>
            </div>
            <h1 className='lg:text-3xl xl:text-4xl font-bold lg:mb-6'>welcome to the future</h1>
            <h2 className='lg:text-xl font-semibold'>we help developers connect with the world</h2>
            <button className='flex items-center hover:bg-blue-400 bg-blue-200 rounded-md lg:h-8 xl:h-10 lg:mt-3 xl:mt-5 px-3 lg:font-medium xl:font-semibold xl:text-lg lg:text-base focus:outline-none '>Get Started</button>
          </div>
          <div className='mr-auto'>
            <img className='lg:h-72 xl:h-96 w-auto' src='/images/placeholder-img/landingPage.png'></img>
          </div>
        </div>

      </div>
    </>
  )
}

// TODO: 

// link for get started to go to explore
//  rename "get started" button to "explore"
// get rid of hover effect of "Dev"
// 