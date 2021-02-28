import React from 'react'

export default function TemplateVisible () {
  return (
    <>
      <h1>visible</h1>
      <div className="w-72 h-72 bg-yellow-300">
        <div className="w-72 h-72 bg-red-500 visible hover:invisible"></div>

      </div>
    </>
  )
}
