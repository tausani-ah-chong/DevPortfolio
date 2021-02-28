import React from 'react'
// import templateWorkCard from './templateWorkCard'
// import TemplateExplore from './TemplateExplore'
import TemplateWorkCard from './templateWorkCard'

export default function TemplateProfileExplore () {
  return (
    <>
      {/* <TemplateExplore/> */}
      <div className='w-screen h- grid grid-cols-4 gap-4 bg-yellow-400 rounded-md p-10'>
        <TemplateWorkCard/>
        <TemplateWorkCard/>
        <TemplateWorkCard/>
        <TemplateWorkCard/>
        <TemplateWorkCard/>
        <TemplateWorkCard/>
        <TemplateWorkCard/>
        <TemplateWorkCard/>
      </div>
    </>
  )
}
