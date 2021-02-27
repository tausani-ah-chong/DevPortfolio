import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DevCard from './DevCard'
import { setStore } from './exploreHelper'

function Software ({ software }) {
  useEffect(() => {
    setStore()
  }, [])

  return (
    <>
      <div className=" w-screen grid grid-cols-4 gap-4 bg-blue-400 rounded-md p-10">
        {
          software.map(dev => {
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
    software: state.software
  }
}

export default connect(mapStateToProps)(Software)
