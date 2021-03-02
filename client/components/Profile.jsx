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
      <div className="w-full  h-96 grid grid-cols-2 p-3">
        {/* profilepic and hire button */}
        <div className="w-full h-full flex pr-10">
          <div className=" pr-6 pt-3 justify-center ml-auto">
            <div>
              {
                devs.map(e => {
                  return (
                    <img key={e.id} src={e.profilePicture} className="mb-3 mx-auto rounded-full lg:h-32 lg:w-32 xl:h-48 xl:w-48" alt=""/>
                  )
                })
              }
              <button type="button" className="flex items-center mx-auto hover:bg-blue-400 bg-blue-200 rounded-md h-10 px-3 font-semibold text-lg">Hire Me</button>
            </div>
          </div>
          {/* user info */}
          <div className="w-auto max-w-md h-full pt-2">
            <ul>
              {devs.map(e => (<li key={e.id} className='lg:text-3xl xl:text-5xl mb-1 font-semibold' >{e.firstName} {e.lastName}</li>))}
              {devs.map(e => (<li key={e.id} className='lg:text-lg xl:text-xl italic mb-1' >{e.pronoun}</li>))}
              {/* <li className="lg:text-lg xl:text-xl italic mb-1">Full Stack Dev,Auckland</li> */}
              <hr/>
              {/* {devs.map(e => e.languages.map(el => (<li key={el.id} className="lg:text-lg xl:text-xl italic my-2">JS, Css, C#, Python</li>)))} */}
              {
                devs.map(e => {
                  return (
                    <li key={e.id} className="lg:text-lg xl:text-xl italic my-2">
                      {
                        e.languages.map(el => {
                          return (
                            <span key={el.languageId}>{el.languageName}, </span>
                          )
                        })
                      }
                    </li>
                  )
                })
              }
              {/* <li className="lg:text-lg xl:text-xl italic my-2">JS, Css, C#, Python</li> */}
              <hr/>
            </ul>
            <div className='h-40 mt-3 w-auto overflow-auto bg-gray-200 rounded-md'>
              {
                devs.map(e => {
                  return (
                    <p key={e.id} className="mr-3 italic">{e.bio}</p>
                  )
                })
              }
              {/* <p className="mr-3 italic">Bio</p> */}
            </div>
          </div>
        </div>
        {/* showcase reel carousel */}
        <div className="w-full order-2 flex items-center">
          <div className="mr-96 xl:h-96 w-auto flex items-center">
            {
              devs[0].projects.length ? (<img src={devs[0].projects[0].projectImage} alt=""/>) : null
            }
          </div>
          {/* <ProfileCarousel /> */}
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
