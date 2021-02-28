import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DevCard from './DevCard'
import { setStore } from './exploreHelper'

function Mobile ({ mobile }) {
  useEffect(() => {
    setStore()
  }, [])

  return (
    <>
      <div className=" w-screen grid grid-cols-4 gap-4 bg-blue-400 rounded-md p-10">
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
