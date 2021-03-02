import React from 'react'

export default function NewProfileBanner () {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nulla dui, non vestibulum arcu bibendum a. Morbi vestibulum molestie eros ac mattis. Maecenas a justo bibendum, ornare nisl vel, blandit tortor. In euismod purus eu lacinia pulvinar. Morbi vel purus velit. Etiam maximus, nisi et commodo tempor, nisi odio tincidunt massa, vel sagittis lorem nisi non elit. Nam ligula felis, molestie ut nunc eu, sollicitudin maximus sapien.'

  return (
    <>
      <div className="w-full lg:h-72 xl:h-96 bg-yellow-200 grid grid-cols-2 gap-4">
        <div className="lg:h-72 xl:h-96 bg-green-300 flex py-3 pr-10 ">
          <div className=" pr-6 pt-3 justify-center ml-auto">
            <div>
              <div className="mb-3 mx-auto rounded-full lg:h-32 lg:w-32 xl:h-48 xl:w-48 bg-red-400"></div>
              <button type="button" className="flex items-center mx-auto hover:bg-blue-400 bg-blue-200 rounded-md h-10 px-3 font-semibold text-lg">Hire Me</button>
            </div>
          </div>
          <div className="w-auto max-w-md h-full pt-2">
            <ul>
              <li className='lg:text-3xl xl:text-5xl mb-1 font-semibold' >Multi Ah Foon</li>
              <li className="lg:text-lg xl:text-xl italic mb-1">Full Stack Dev,Auckland</li>
              <hr/>
              <li className="lg:text-lg xl:text-xl italic my-2">JS, Css, C#, Python</li>
              <hr/>
            </ul>
            <div className='lg:h-32 mt-3 lg:w-80 overflow-auto bg-gray-200 rounded'>
              <p className="mr-3 lg:text-sm xl:text-base italic">{loremIpsum }</p>
            </div>
          </div>
        </div>
        <div className="lg:h-72 xl:h-96 bg-green-400"></div>
      </div>
    </>
  )
}
