import React from 'react'
// import templateWorkCard from './templateWorkCard'
// import TemplateExplore from './TemplateExplore'
import TemplateWorkCard from './templateWorkCard'

export default function TemplateProfileExplore () {
  return (
    <>
      {/* <TemplateExplore/> */}
      <div className='w-full grid lg:grid-cols-3 xl:grid-cols-4 gap-4 rounded-md lg:py-10 lg:px-6 xl:px-10'>
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
