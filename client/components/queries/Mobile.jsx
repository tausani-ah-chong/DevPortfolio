import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DevCard from '../DevCard'
import { getMobile } from './mobileHelper'

function Mobile ({ mobile }) {
  useEffect(() => {
    getMobile()
  }, [])

  return (
    <>
      <div className="w-screen h- grid grid-cols-4 gap-4 rounded-md p-10">
        {
          mobile.map(dev => {
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
    mobile: state.mobile
  }
}

export default connect(mapStateToProps)(Mobile)
