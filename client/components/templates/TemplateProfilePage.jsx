import React from 'react'

import TemplateNav from './TemplateNav'
import TemplateProfileBanner from './TemplateProfileBanner'
import TemplateProfileExplore from './TemplateProfileExplore'

export default function TemplateProfilePage () {
  return (
    <>
      <div>
        <TemplateProfileBanner/>
        <TemplateProfileExplore/>
      </div>

    </>
  )
}
