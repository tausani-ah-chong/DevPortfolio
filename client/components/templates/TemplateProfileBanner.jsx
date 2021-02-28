import React from 'react'
import TemplateProfileCarousel from './TemplateProfileCarousel'

export default function TemplateProfileBanner () {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nulla dui, non vestibulum arcu bibendum a. Morbi vestibulum molestie eros ac mattis. Maecenas a justo bibendum, ornare nisl vel, blandit tortor. In euismod purus eu lacinia pulvinar. Morbi vel purus velit. Etiam maximus, nisi et commodo tempor, nisi odio tincidunt massa, vel sagittis lorem nisi non elit. Nam ligula felis, molestie ut nunc eu, sollicitudin maximus sapien.'
  const loremIpsum2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nulla dui, non vestibulum arcu bibendum a. Morbi vestibulum molestie eros ac mattis. Maecenas a justo bibendum, ornare nisl vel, blandit tortor. In euismod purus eu lacinia pulvinar. Morbi vel purus velit. Etiam maximus, nisi et commodo tempor, nisi odio tincidunt massa, vel sagittis lorem nisi non elit. Nam ligula felis, molestie ut nunc eu, sollicitudin maximus sapien.'
  const loremIpsum3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nulla dui, non vestibulum arcu bibendum a. Morbi vestibulum molestie eros ac mattis. Maecenas a justo bibendum, ornare nisl vel, blandit tortor. In euismod purus eu lacinia pulvinar. Morbi vel purus velit. Etiam maximus, nisi et commodo tempor, nisi odio tincidunt massa, vel sagittis lorem nisi non elit. Nam ligula felis, molestie ut nunc eu, sollicitudin maximus sapien.'
  const finalIpsum = `${loremIpsum} , ${loremIpsum2}, ${loremIpsum3}`

  return (
    <>
      <div className="w-full bg-gray-400 h-96 grid grid-cols-2 p-3">
        {/* profilepic and hire button */}
        <div className="w-full h-full bg-blue-200 flex pr-10 pl-72">
          <div>
            <div className="ml-10 rounded-full h-48 w-48 bg-red-400"></div>
            <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">Hire Me</button>
          </div>
          {/* user info */}
          <div className="bg-yellow-400 w-1/2 h-full p-3">
            <ul>
              <li className='text-5xl font-semibold' >Multi Ah Foon</li>
              <li className="border-b-2 border-black text-xl italic">Full Stack Dev,Auckland</li>
              <li className="border-b-2 border-black text-xl italic my-3">JS, Css, C#, Python</li>
            </ul>
            <div className='h-36 w-auto overflow-auto border-2 border-cgrey rounded-md'>
              <p className="mx-3">Bio: {finalIpsum }</p>
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
