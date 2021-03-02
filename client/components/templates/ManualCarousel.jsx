import React, { useState, useRef } from 'react'

export default function ManualCarousel (props) {
  const [pic, setPic] = useState(1)

  console.log('carouselprops', props)

  return (
    <>
      <div className="lg:h-72 xl:h-96 order-2">
        {/* <img className=" lg:w-12 xl:w-14 h-auto absolute xl:left-10 xl:top-40 lg:top-28 lg:left-12" src='/images/placeholder-img/left.png' onClick={() => setPic(pic + 1)}/> */}

        <div className="lg:h-72 xl:h-96 w-full ">
          <div className="order-2 aspect-w-16 aspect-h-9 rounded-md">
            <div className="h-0 pt-p relative">
              {/* <button onClick={() => console.log('left')} className='bg-green-400 h-60 w-28 absolute left-0 top-0 lg:ml-12 xl:ml-10 lg:mt-3 xl:mt-5 '></button>
              <div onClick={() => console.log('right')} className='bg-green-600 h-60 w-28 absolute right-0 top-0 lg:mr-14 xl:mr-48 lg:mt-3 xl:mt-5'></div> */}

              <img className="lg:h-3/4 xl:h-2/3 absolute top-0 left-0 lg:ml-12 xl:ml-10 lg:mt-3 xl:mt-5 object-cover rounded-md opacity-20" src={`/images/placeholder-img/pic${pic}.jpg`}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
