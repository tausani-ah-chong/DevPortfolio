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
      <div className=" w-full grid xl:grid-cols-4 lg:grid-cols-3 gap-4 gap-x-4 rounded-md lg:px-6 xl:px-10">
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
