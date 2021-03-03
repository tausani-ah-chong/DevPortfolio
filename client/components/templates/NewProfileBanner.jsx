import React, { useState } from 'react'

import ProfileCarousel from '../ProfileCarousel'
import ManualCarousel from './ManualCarousel'

export default function NewProfileBanner () {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nulla dui, non vestibulum arcu bibendum a. Morbi vestibulum molestie eros ac mattis. Maecenas a justo bibendum, ornare nisl vel, blandit tortor. In euismod purus eu lacinia pulvinar. Morbi vel purus velit. Etiam maximus, nisi et commodo tempor, nisi odio tincidunt massa, vel sagittis lorem nisi non elit. Nam ligula felis, molestie ut nunc eu, sollicitudin maximus sapien.'
  const [pic, setPic] = useState(1)

  return (
    <>
      {/* Container */}
      <div className="w-full lg:h-72 xl:h-96 grid grid-cols-2 gap-4 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-md">

        {/* Left Container */}
        <div className="lg:h-72 xl:h-96 flex lg:py-3 xl:py-6 lg:pr-10 xl:pr-14">

          {/* Profile Pic & Hire Me btn */}
          <div className=" pr-6 pt-3 justify-center ml-auto">
            <div className="xl:mr-2">
              <div className="mb-3 mx-auto rounded-full lg:h-32 lg:w-32 xl:h-48 xl:w-48 bg-red-400"></div>
              <button type="button" className="flex items-center mx-auto hover:bg-blue-400 bg-blue-200 rounded-md lg:h-8 px-3 font-normal text-lg">Hire Me</button>
            </div>
          </div>

          {/* User Info */}
          <div className="w-auto max-w-md h-full pt-2">
            <ul>
              <li className='lg:text-3xl xl:text-4xl mb-1 font-semibold' >Multi Ah Foon</li>
              <li className="lg:text-lg xl:text-xl italic mb-1">Big/Huge, Auckland</li>
              <hr/>
              <li className="lg:text-lg xl:text-xl italic my-2">JS, Css, C#, Python</li>
              <hr/>
            </ul>
            <div className='lg:h-28 xl:h-44 mt-3 lg:w-80 xl:w-auto overflow-auto bg-gray-200 rounded'>
              <p className="mr-3 ml-1 lg:text-sm xl:text-base italic">{loremIpsum }</p>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="lg:h-72 xl:h-96">
          {/* Carousel */}
          <div className="lg:h-72 xl:h-96 w-full ">
            <div className="order-2 aspect-w-16 aspect-h-9 rounded-md">
              <div className="h-0 pt-p">
                <img className="lg:h-3/4 xl:h-2/3 absolute top-0 left-0 lg:ml-12 xl:ml-10 lg:mt-3 xl:mt-5  object-cover rounded-md" src='/images/placeholder-img/pic1.jpg'/>
              </div>
            </div>
          </div>
        </div>
        {/* <ManualCarousel/> */}
      </div>
    </>
  )
}
