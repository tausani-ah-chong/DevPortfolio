import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setStore } from './profileHelper'

function Profile ({ devs }) {
  const { id } = useParams()

  useEffect(() => {
    setStore(id)
  }, [])

  return (
    <>
      {/* Container */}
      <div className="w-full lg:h-72 xl:h-96 grid grid-cols-2 gap-4 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-md">

        {/* Left Container */}
        <div className="lg:h-72 xl:h-96 flex lg:py-3 xl:py-6 xl:pr-14">

          {/* Profile Pic & Hire Me btn */}
          <div className=" pr-6 pt-3 justify-center ml-auto">
            <div className="xl:mr-2">
              {
                devs.map(e => {
                  return (
                    e.profilePicture
                      ? <img key={e.id} src={e.profilePicture} className="mb-3 mx-auto rounded-full lg:h-32 lg:w-32 2xl:h-48 2xl:w-48" alt="" />
                      : <img key={e.id} className="mb-3 mx-auto rounded-full lg:h-32 lg:w-32 xl:h-48 xl:w-48" src='https://www.appliedlogistics.co.nz/wp-content/uploads/2018/01/person-placeholder-300x300.jpg' />
                  )
                })
              }
              <button type="button" className="flex items-center mx-auto hover:bg-blue-400 bg-blue-200 rounded-md lg:h-8 px-3 font-normal text-lg">Hire Me</button>
            </div>
          </div>

          {/* User Info */}
          <div className="w-auto max-w-md h-full pt-2">
            <ul>
              {devs.map(e => (<li key={e.id} className='lg:text-3xl xl:text-4xl mb-1 font-semibold' >{e.firstName} {e.lastName}</li>))}
              {devs.map(e => (<li key={e.id} className='lg:text-lg xl:text-xl italic mb-1' >{e.pronoun}</li>))}
              <hr />
              {devs.map(e => (<li key={e.id} className="lg:text-lg xl:text-xl italic my-2">{e.languages.map(el => (<span key={el.languageId}>{el.languageName}, </span>))}</li>))}
              <hr />
            </ul>
            <div className='lg:h-28 xl:h-44 mt-3 lg:w-80 xl:w-auto overflow-auto bg-gray-200 rounded'>
              {devs.map(e => (<p key={e.id} className="mr-3 ml-1 lg:text-sm xl:text-base italic">{e.bio}</p>))}
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="lg:h-72 xl:h-96">
          {/* Carousel */}
          <div className="lg:h-72 xl:h-96 w-full ">
            <div className="order-2 aspect-w-16 aspect-h-9 rounded-md">
              <div className="h-0 pt-p">
                {devs[0].projects.length
                  ? (<img className="lg:h-3/4 xl:h-2/3 absolute top-0 left-0 lg:ml-12 xl:ml-10 lg:mt-3 xl:mt-5  object-cover rounded-md" src={devs[0].projects[0].projectImage} alt="" />)
                  : <div className="lg:h-3/4 xl:h-2/3 absolute top-0 left-0 lg:ml-12 xl:ml-10 lg:mt-3 xl:mt-5  object-cover rounded-md"><h2><strong>No current projects</strong></h2></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    devs: state.devs
  }
}

export default connect(mapStateToProps)(Profile)
