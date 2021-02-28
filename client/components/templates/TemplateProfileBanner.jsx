import React from 'react'
import TemplateProfileCarousel from './TemplateProfileCarousel'

export default function TemplateProfileBanner () {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nulla dui, non vestibulum arcu bibendum a. Morbi vestibulum molestie eros ac mattis. Maecenas a justo bibendum, ornare nisl vel, blandit tortor. In euismod purus eu lacinia pulvinar. Morbi vel purus velit. Etiam maximus, nisi et commodo tempor, nisi odio tincidunt massa, vel sagittis lorem nisi non elit. Nam ligula felis, molestie ut nunc eu, sollicitudin maximus sapien.'
  const loremIpsum2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nulla dui, non vestibulum arcu bibendum a. Morbi vestibulum molestie eros ac mattis. Maecenas a justo bibendum, ornare nisl vel, blandit tortor. In euismod purus eu lacinia pulvinar. Morbi vel purus velit. Etiam maximus, nisi et commodo tempor, nisi odio tincidunt massa, vel sagittis lorem nisi non elit. Nam ligula felis, molestie ut nunc eu, sollicitudin maximus sapien.'
  const loremIpsum3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nulla dui, non vestibulum arcu bibendum a. Morbi vestibulum molestie eros ac mattis. Maecenas a justo bibendum, ornare nisl vel, blandit tortor. In euismod purus eu lacinia pulvinar. Morbi vel purus velit. Etiam maximus, nisi et commodo tempor, nisi odio tincidunt massa, vel sagittis lorem nisi non elit. Nam ligula felis, molestie ut nunc eu, sollicitudin maximus sapien.'
  const finalIpsum = `${loremIpsum} , ${loremIpsum2}, ${loremIpsum3}`

  return (
    <>
      <div className="w-full  h-96 grid grid-cols-2 p-3">
        {/* profilepic and hire button */}
        <div className="w-full h-full flex pr-10 pl-72">
          <div className=" pr-6 pt-3 justify-center">
            <div>
              <div className="mb-3 mx-auto rounded-full h-48 w-48 bg-red-400"></div>
              <button type="button" className="flex items-center mx-auto hover:bg-yellow-200 bg-blue-200 rounded-md h-10 px-3 font-semibold text-lg">Hire Me</button>
            </div>
          </div>
          {/* user info */}
          <div className="w-auto h-full pt-2 pr-20">
            <ul>
              <li className='text-5xl mb-1 font-semibold' >Multi Ah Foon</li>
              <li className="text-xl italic mb-1">Full Stack Dev,Auckland</li>
              <hr/>
              <li className="text-xl italic my-2">JS, Css, C#, Python</li>
              <hr/>
            </ul>
            <div className='h-40 mt-3 w-auto overflow-auto bg-gray-200 rounded-md'>
              <p className="mr-3 italic">{finalIpsum }</p>
            </div>
          </div>
        </div>
        {/* showcase reel carousel */}
        <div className="w-full order-2 flex items-center">
          <TemplateProfileCarousel/>
        </div>

      </div>
    </>
  )
}
