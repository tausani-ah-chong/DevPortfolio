import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DevCard from '../DevCard'
import { getC } from './cHelper'

function C ({ c }) {
  useEffect(() => {
    getC()
  }, [])

  return (
    <>
      <div className="w-screen h- grid grid-cols-4 gap-4 rounded-md p-10">
        {
          c.map(dev => {
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
    c: state.c
  }
}

export default connect(mapStateToProps)(C)
