import React, { useState } from 'react'

export default function TemplateProfileCarousel () {
  const [pic, setPic] = useState(1)

  // setTimeout(function () { setPic(pic + 1) }, 1000)

  console.log(pic)

  if (pic > 3) {
    setPic(1)
  } else if (pic < 1) {
    setPic(3)
  }

  return (
    // <div className="mr-96 xl:h-96 w-auto flex items-center">
    //   {/* <div className="w-c flex items-center"> */}
    //     {/* <img className=" w-14 h-auto opacity-20" src='/images/placeholder-img/left.png' onClick={() => setPic(pic - 1)}/> */}
    //     <img src={`/images/placeholder-img/pic${pic}.jpg`} className="object-cover rounded-md"/>
    //     {/* <img className=" w-14 h-auto opacity-20" src='/images/placeholder-img/right.png' onClick={() => setPic(pic + 1)}/> */}
    //   {/* </div> */}
    // </div>
    <div className="order-2 aspect-w-16 aspect-h-9 rounded-md bg-green-500">
      <div className="h-0 pt-p">
        <div className="h-5/6 w-5/6 bg-green-500"></div>
      </div>

      {/* <TemplateProfileCarousel/> */}
      {/* <div className="h-0 pt-p">
        <img className="h-5/6 w-5/6 absolute top-0 left-0 lg:ml-12 xl:ml-10 lg:mt-5 object-cover rounded-md" src='/images/placeholder-img/pic1.jpg'/>
      </div> */}
    </div>

  )
}
