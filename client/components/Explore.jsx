import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DevCard from './DevCard'
import { getDev } from './exploreHelper'

function Explore ({ devs }) {
  useEffect(() => {
    getDev()
  }, [])

  return (
    <>
      <div className=" w-screen grid grid-cols-4 lg:grid-cols-3 gap-4 gap-x-4 rounded-md px-10">
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

export default connect(mapStateToProps)(Explore)
