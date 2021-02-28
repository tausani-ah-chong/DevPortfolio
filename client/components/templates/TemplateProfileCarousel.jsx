import React, { useState } from 'react'

export default function TemplateProfileCarousel () {
  const [pic, setPic] = useState(1)

  // setTimeout(function () { setPic(pic + 1) }, 4000)

  console.log(pic)

  if (pic === 3) {
    setPic(1)
  } else if (pic < 1) {
    setPic(3)
  }

  return (
    <div className="mr-96 border-black border-rounded-md flex items-center">
      <img className=" w-14 h-auto opacity-20" src='/images/placeholder-img/left.png' onClick={() => setPic(pic - 1)}/>
      <img src={`/images/placeholder-img/pic${pic}.jpg`} className="mx-auto w-auto h-96 rounded-md"/>
      <img className=" w-14 h-auto opacity-20" src='/images/placeholder-img/right.png' onClick={() => setPic(pic + 1)}/>
      {/* <button onClick={() => setPic(pic + 1)}>Next </button>
      <button onClick={() => setPic(pic - 1)}>Previous</button> */}
    </div>
  )
}
