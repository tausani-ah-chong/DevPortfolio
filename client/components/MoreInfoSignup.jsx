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
        .then(() => props.history.push('/dashboard'))
        .catch(err => console.error(err.message))
    } else {
      alert('Must Choose at least one language and platform')
    }
  }

  return (
    <>
      <div className="w-full h-auto flex items-center">
        <div className=" w-auto mx-auto lg:my-6 xl:my-20">
          <form onSubmit={handleSubmit}>

            <p className="text-center lg:text-xl xl:text-3xl font-semibold ">What programming Languages do you know?</p>
            <span className="flex flex-row">

              <div className="languageCard">
                <ul className="text-center">

                  <li><i className="devicon-javascript-plain lg:text-8xl xl:text-9xl text-white"></i></li>
                  {/* lg:text-8xl xl:text-9xl text-white */}
                  <li className="languageCardText"><label htmlFor='JS'>Java script</label></li>
                  <li><input id='JS' type="checkbox" value='JS' /></li>

                </ul>
              </div>

              <div className="languageCard">
                <ul className="text-center">

                  <li><i className="devicon-csharp-plain lg:text-8xl xl:text-9xl text-white"></i></li>
                  <li className="languageCardText"><label htmlFor='C#'>C#</label></li>
                  <li><input id='C#' type="checkbox" value='C#' /></li>

                </ul>
              </div>

              <div className="languageCard">
                <ul className="text-center">

                  <li><i className="devicon-typescript-plain lg:text-8xl xl:text-9xl text-white"></i></li>
                  <li className='languageCardText'><label htmlFor='TS'>TS</label></li>
                  <li><input id='TS' type="checkbox" value='TS' /></li>

                </ul>
              </div>
            </span>

            <p className="text-center lg:text-xl xl:text-3xl font-semibold ">What platforms do you work on?</p>

            <span className="flex flex-row">

              <div className="languageCard  flex">
                <ul className="text-center">

                  <li><i className="devicon-ie10-original  lg:text-8xl xl:text-9xl text-white"></i></li>
                  <li className="languageCardText"><label htmlFor='web'>Web</label></li>
                  <li><input id='web' type="checkbox" value='web'/></li>

                </ul>
              </div>

              <div className="languageCard">
                <ul className="text-center">

                  <li><i className="devicon-apple-original lg:text-8xl xl:text-9xl text-white"></i></li>
                  <li className="languageCardText"> <label htmlFor='mobile'>Mobile</label></li>
                  <li><input id='mobile' type="checkbox" value='mobile'/></li>

                </ul>
              </div>

              <div className="languageCard">
                <ul className="text-center">

                  <li><i className="devicon-windows8-original lg:text-8xl xl:text-9xl text-white"></i></li>
                  <li className="languageCardText"><label htmlFor='software'>Software</label></li>
                  <li><input id='software' type="checkbox" value='software'/></li>

                </ul>
              </div>

            </span>

            <Link to='/'>
              <button type="button" className="flex items-center mx-auto hover:bg-blue-400 bg-blue-200 rounded-md h-10 px-3 font-semibold text-lg">Complete</button>
            </Link>


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
