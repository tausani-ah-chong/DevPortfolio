import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DevCard from './DevCard'
import consume from '../consume'
import { setDevs } from '../actions/devs'

function TemplateExplore ({ dispatch, devs }) {
  useEffect(() => {
    return consume('/dev')
      .then((res) => {
        dispatch(setDevs(res.body))
        return null
      })
  }, [])
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
