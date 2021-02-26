import React, { useEffect } from 'react'
import consume from '../consume'
import { setDevs } from '../actions/devs'
import { connect } from 'react-redux'

function Explore ({ dispatch, devs }) {
  useEffect(() => {
    return consume('/dev')
      .then((res) => {
        dispatch(setDevs(res.body))
        return null
      })
  }, [])

  return (
    <>
      <h1>Explore Page!</h1>
      {
        devs.map(dev => {
          return (
            <p key={dev.id}>{dev.first_name}</p>
          )
        })
      }
    </>
  )
}

function mapStateToProps (state) {
  return {
    devs: state.devs
  }
}

export default connect(mapStateToProps)(Explore)
