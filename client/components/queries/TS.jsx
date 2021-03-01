import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DevCard from '../DevCard'
import { getTS } from './tsHelper'

function TS ({ ts }) {
  useEffect(() => {
    getTS()
  }, [])

  return (
    <>
      <div className="w-screen h- grid grid-cols-4 gap-4 rounded-md p-10">
        {
          ts.map(dev => {
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
    ts: state.ts
  }
}

export default connect(mapStateToProps)(TS)
