import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DevCard from '../DevCard'
import { getJS } from './jsHelper'

function JS ({ js }) {
  useEffect(() => {
    getJS()
  }, [])

  return (
    <>
      <div className="w-screen h- grid grid-cols-4 gap-4 rounded-md p-10">
        {
          js.map(dev => {
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
    js: state.js
  }
}

export default connect(mapStateToProps)(JS)
