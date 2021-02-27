import React from 'react'

export default function TemplateProfileBanner () {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nulla dui, non vestibulum arcu bibendum a. Morbi vestibulum molestie eros ac mattis. Maecenas a justo bibendum, ornare nisl vel, blandit tortor. In euismod purus eu lacinia pulvinar. Morbi vel purus velit. Etiam maximus, nisi et commodo tempor, nisi odio tincidunt massa, vel sagittis lorem nisi non elit. Nam ligula felis, molestie ut nunc eu, sollicitudin maximus sapien.'
  const loremIpsum2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nulla dui, non vestibulum arcu bibendum a. Morbi vestibulum molestie eros ac mattis. Maecenas a justo bibendum, ornare nisl vel, blandit tortor. In euismod purus eu lacinia pulvinar. Morbi vel purus velit. Etiam maximus, nisi et commodo tempor, nisi odio tincidunt massa, vel sagittis lorem nisi non elit. Nam ligula felis, molestie ut nunc eu, sollicitudin maximus sapien.'
  const loremIpsum3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nulla dui, non vestibulum arcu bibendum a. Morbi vestibulum molestie eros ac mattis. Maecenas a justo bibendum, ornare nisl vel, blandit tortor. In euismod purus eu lacinia pulvinar. Morbi vel purus velit. Etiam maximus, nisi et commodo tempor, nisi odio tincidunt massa, vel sagittis lorem nisi non elit. Nam ligula felis, molestie ut nunc eu, sollicitudin maximus sapien.'
  const finalIpsum = `${loremIpsum} , ${loremIpsum2}, ${loremIpsum3}`
  return (
    <>
      <div className="w-full bg-gray-400 h-96 grid grid-cols-3 p-1">
        <div className="w-full h-full bg-blue-200 order-1 relative">
          <div className=" absolute left-0 bg-indigo-500 w-1/2 h-full flex flex-col items-center">
            <div className="ml-10 rounded-full h-48 w-48 bg-red-400"></div>
            <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">Hire Me</button>
          </div>
          <div className="bg-yellow-400 w-1/2 h-full absolute flex flex-col items-center right-0">
            <ul>
              <li >Multi Ah Foon</li>
              <li className="border-b-2 border-black">Full Stack Dev</li>
              <li className="border-b-2 border-black">Auckland, Nz</li>
              <li className="border-b-2 border-black">JS, Css, C#, Python</li>
            </ul>
            <div className='mx-6 h-36 overflow-auto border -2 border-black rounded-r-md'>
              <p className="mx-3">Bio: {finalIpsum }</p>
            </div>

          </div>
        </div>
        <div className="bg-green-400 w-full order-2 col-span-2 flex items-center">
          <img src="/images/placeholder-img/pic1.jpg" className="mx-auto my-auto w-auto h-72 "/>
        </div>
      </div>
    </>
  )
}
