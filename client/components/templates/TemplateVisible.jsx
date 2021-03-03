import React from 'react'

export default function TemplateVisible () {
  return (
    <>
      <div className='w-full grid grid-cols-4'>
        <div className='h-72 w-72 bg-green-300 hover-trigger'>
          <div className='hover-target'></div>
        </div>
        <div className='h-72 w-72 bg-green-300 hover-trigger'>
          <div className='h-full bg-gradient-to-t from-black to-transparent opacity-40 invisible hover-target'></div>
        </div>
        <div className='h-72 w-72 bg-green-300 hover-trigger'>
          <div className='h-full bg-gradient-to-t from-black to-transparent opacity-40 invisible hover-target'></div>
        </div>
        <div className='h-72 w-72 bg-green-300 hover-trigger'>
          <div className='h-full bg-gradient-to-t from-black to-transparent opacity-40 invisible hover-target'></div>
        </div>
        <div className='h-72 w-72 bg-green-300 hover-trigger'>
          <div className='h-full bg-gradient-to-t from-black to-transparent opacity-40 invisible hover-target'></div>
        </div>

      </div>
    </>
  )
}
