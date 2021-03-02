import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import WorkCard from './WorkCard'
import { useParams } from 'react-router-dom'
import { setStore } from './profileHelper'

function ProfileExplore ({ devs }) {
  const { id } = useParams()
  useEffect(() => {
    setStore(Number(id))
  }, [])

  return (
    <>
      <div className='w-screen h- grid lg:grid-cols-3 xl:grid-cols-4 gap-4 rounded-md lg:py-1 xl:p-10'>
        {
          devs.length && <WorkCard devs={devs}/>
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

export default connect(mapStateToProps)(ProfileExplore)
