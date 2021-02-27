import React from 'react'
import { connect } from 'react-redux'
import DevCard from './DevCard'

function TemplateExplore ({ devs }) {
  return (
    <>
      <div className=" w-screen grid grid-cols-4 gap-4 bg-blue-400 rounded-md p-10">
        {
          devs.map(dev => {
            return (
              <DevCard key={dev.id} dev={dev} />
            )
          })
        }
      </div>

    </>
  )
}

function mapStateToProps (state) {
  return {
    devs: state.devs
  }
}

export default connect(mapStateToProps)(TemplateExplore)
