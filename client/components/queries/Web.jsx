import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DevCard from '../DevCard'
import { getWeb } from './webHelper'

function Web ({ web }) {
  useEffect(() => {
    getWeb()
  }, [])

  return (
    <>
      <div className=" w-screen grid grid-cols-4 gap-4 bg-blue-400 rounded-md p-10">
        {
          web.map(dev => {
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
    web: state.web
  }
}

export default connect(mapStateToProps)(Web)
