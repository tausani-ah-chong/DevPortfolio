import React from 'react'

import TemplateNav from './TemplateNav'
import TemplateExplore from './TemplateExplore'
import TemplateBanner from './TemplateBanner'
import TemplateNavButtons from './TemplateNavButtons'

export default function Template (props) {
  // const url = '../../server/public/pic336.jpg'

  return (
    <>
      <TemplateNav/>
      <TemplateBanner/>
      <TemplateNavButtons/>
      <TemplateExplore/>
    </>
  )
}
