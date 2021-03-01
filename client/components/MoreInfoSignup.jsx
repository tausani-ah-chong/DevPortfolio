import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import consume from '../consume'
import { connect } from 'react-redux'

function MoreInfoSignup (props) {
  const [languages, setLanguages] = useState([])
  const [platforms, setPlatforms] = useState([])
  // const [button, setButton] = useState(false)
  const id = Number(useParams().id)

  function changeLang (e) {
    return !languages.some(element => element.languageId === e.target.value)
      ? setLanguages([...languages, { languageId: e.target.value }])
      : setLanguages(languages.filter(language => language.languageId !== e.target.value))
  }

  function changePlat (e) {
    return !platforms.some(element => element.platformId === e.target.value)
      ? setPlatforms([...platforms, { platformId: e.target.value }])
      : setPlatforms(platforms.filter(platform => platform.platformId !== e.target.value))
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (languages.length && platforms.length) {
      consume(`/devLang/${id}`, 'post', languages)
        .then(() => consume(`/devPlat/${id}`, 'post', platforms))
        .then(() => props.history.push('/'))
        .catch(err => console.error(err.message))
    } else {
      alert('Must Choose at least one language and platform')
    }
  }

  return (
    <>
      <div className="w-full h-auto flex items-center">
        <div className=" w-auto mx-auto my-20">
          <form onSubmit={handleSubmit}>

            <p className="text-center text-3xl font-semibold ">What programming Languages do you know?</p>
            <span className="flex flex-row">

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 rounded-md m-6 p-6">
                <ul className="text-center">
                  <li><i className="devicon-javascript-plain text-9xl text-white"></i></li>
                  <li className="mb-0 mt-1 font-medium text-lg italic"><label htmlFor='JS'>Java script</label></li>
                  <li><input id='JS' type="checkbox" value={1} name='languages' onChange={changeLang} /></li>
                </ul>
              </div>

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 rounded-md m-6 p-6">
                <ul className="text-center">
                  <li><i className="devicon-csharp-plain text-9xl text-white"></i></li>
                  <li className="mb-0 mt-1 font-medium text-lg italic"><label htmlFor='C#'>C#</label></li>
                  <li><input id='C#' type="checkbox" value={2} name='languages' onChange={changeLang} /></li>
                </ul>
              </div>

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 rounded-md m-6 p-6">
                <ul className="text-center">
                  <li><i className="devicon-typescript-plain text-9xl text-white"></i></li>
                  <li className='mb-0 mt-1 font-medium text-lg italic'><label htmlFor='TS'>TS</label></li>
                  <li><input id='TS' type="checkbox" value={3} name='languages' onChange={changeLang} /></li>
                </ul>
              </div>
            </span>

            <p className="text-center text-3xl font-semibold ">What platforms do you work on?</p>

            <span className="flex flex-row">

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 rounded-md m-6 p-6  flex">
                <ul className="text-center">
                  <li><i className="devicon-ie10-original  text-9xl text-white"></i></li>
                  <li className="mb-0 mt-1 font-medium text-lg italic"><label htmlFor='web'>Web</label></li>
                  <li><input id='web' type="checkbox" value={1} name='platforms' onChange={changePlat} /></li>
                </ul>
              </div>

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 rounded-md m-6 p-6">
                <ul className="text-center">
                  <li><i className="devicon-apple-original text-9xl text-white"></i></li>
                  <li className="mb-0 mt-1 font-medium text-lg italic"> <label htmlFor='mobile'>Mobile</label></li>
                  <li><input id='mobile' type="checkbox" value={2} name='platforms' onChange={changePlat} /></li>
                </ul>
              </div>

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 rounded-md m-6 p-6">
                <ul className="text-center">
                  <li><i className="devicon-windows8-original text-9xl text-white"></i></li>
                  <li className="mb-0 mt-1 font-medium text-lg italic"><label htmlFor='software'>Software</label></li>
                  <li><input id='software' type="checkbox" value={3} name='platforms' onChange={changePlat} /></li>
                </ul>
              </div>

            </span>

            <button className="flex items-center mx-6 hover:bg-yellow-200 bg-blue-200 rounded-md h-10 px-3 font-semibold text-lg">Complete</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default connect()(MoreInfoSignup)

// sign up stage 3 MoreInfoSignup

// languages --buttons for selecting lang or highlight all
// platforms --buttons for selecting platforms or highlight all
