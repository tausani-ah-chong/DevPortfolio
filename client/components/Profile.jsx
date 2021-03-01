import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setStore } from './profileHelper'

function Profile ({ devs }) {
  const { id } = useParams()
  useEffect(() => {
    setStore(Number(id))
  }, [id])

  // console.log(devs[0].firstName)
  return (
    <>
      <h1>Profile</h1>
      {
        devs.map(dev => {
          return (
            <div key={dev.id}>
              <p>User: {dev.firstName} {dev.lastName}</p>
              <p>pronoun: {dev.pronoun}</p>
            </div>
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

export default connect(mapStateToProps)(Profile)
