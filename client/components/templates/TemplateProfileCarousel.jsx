import React, { useState } from 'react'

export default function TemplateProfileCarousel () {
  const [pic, setPic] = useState(1)

  // setTimeout(function () { setPic(pic + 1) }, 1000)

  if (pic > 3) {
    setPic(1)
  } else if (pic < 1) {
    setPic(3)
  }

  return (
    <div className="mr-96 xl:h-96 w-auto flex items-center">
      {/* <div className="w-c flex items-center"> */}
        {/* <img className=" w-14 h-auto opacity-20" src='/images/placeholder-img/left.png' onClick={() => setPic(pic - 1)}/> */}
        <img src={`/images/placeholder-img/pic${pic}.jpg`} className="object-cover rounded-md"/>
        {/* <img className=" w-14 h-auto opacity-20" src='/images/placeholder-img/right.png' onClick={() => setPic(pic + 1)}/> */}
      {/* </div> */}
    </div>
  )
}
