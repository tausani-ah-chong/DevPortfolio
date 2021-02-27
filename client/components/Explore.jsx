import React, { useEffect } from 'react'
import consume from '../consume'
import { setDevs } from '../actions/devs'
import { connect } from 'react-redux'
import DevCard from './DevCard'

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
      <div className="h-14 w-full bg-green-600 flex justify-center">
        <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">All</button>
        <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">Front End</button>
        <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">Back End</button>
        <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">Full Stack</button>
      </div>
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

export default connect(mapStateToProps)(Explore)
