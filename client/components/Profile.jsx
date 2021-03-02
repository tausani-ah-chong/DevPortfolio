import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { setStore } from './profileHelper'
import { useAuth } from '../contexts/AuthContext'

function Profile({ devs }) {
  const { uid } = useParams()
  const history = useHistory()
  const { logout } = useAuth()
  const [error, setError] = useState('')

  useEffect(() => {
    setStore(uid)
  }, [])

  async function handleLogOut () {
    try {
      await logout()
      history.push('/login')
    } catch {
      setError('failed to logout')
    }
  }
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
      <button onClick={handleLogOut}> logout </button>
    </>
  )
}

function mapStateToProps (state) {
  return {
    devs: state.devs
  }
}

export default connect(mapStateToProps)(Profile)
