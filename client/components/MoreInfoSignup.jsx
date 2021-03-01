import React from 'react'
import { Link } from 'react-router-dom'

function MoreInfoSignup () {
  function handleSubmit (e) {
    e.preventDefault()
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

              {/* currently this link is a placeholder for the route */}
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

export default MoreInfoSignup

// sign up stage 3 MoreInfoSignup

// languages --buttons for selecting lang or highlight all
// platforms --buttons for selecting platforms or highlight all
