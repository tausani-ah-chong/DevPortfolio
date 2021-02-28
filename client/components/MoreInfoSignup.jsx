import React from 'react'
import { Link } from 'react-router-dom'

function MoreInfoSignup () {
  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <>
      <div className="w-full h-auto bg-yellow-100 flex items-center">
        <div className=" border-black border-2 w-auto mx-auto">
          <form onSubmit={handleSubmit}>

            <p className="text-center text-3xl font-semibold ">What programming Languages do you know?</p>
            <span className="flex flex-row">

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 border-black border-2 rounded-md m-6">
                <i className="devicon-javascript-plain text-9xl text-white"></i>
                <label htmlFor='JS'>JS</label>
                <input id='JS' type="checkbox" value='JS' />
              </div>

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 border-black border-2 rounded-md m-6">
                <i className="devicon-csharp-plain text-9xl text-white"></i>
                <label htmlFor='C#'>C#</label>
                <input id='C#' type="checkbox" value='C#' />
              </div>

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 border-black border-2 rounded-md m-6">
                <i className="devicon-typescript-plain text-9xl text-white"></i>
                <label htmlFor='TS'>TS</label>
                <input id='TS' type="checkbox" value='TS' />
              </div>
            </span>

            <p className="text-center text-3xl font-semibold ">What platforms do you work on?</p>

            <span className="flex flex-row">

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 border-black border-2 rounded-md m-6">
                <i className="devicon-ie10-original  text-9xl text-white"></i>
                <label htmlFor='web'>Web</label>
                <input id='web' type="checkbox" value='web'/>
              </div>

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 border-black border-2 rounded-md m-6">
                <i className="devicon-apple-original text-9xl text-white"></i>
                <label htmlFor='mobile'>Mobile</label>
                <input id='mobile' type="checkbox" value='mobile'/>
              </div>

              <div className="w-52 h-52 bg-blue-200 hover:bg-blue-500 border-black border-2 rounded-md m-6">
                <i className="devicon-windows8-original text-9xl text-white"></i>

                <label htmlFor='software'>Software</label>
                <input id='software' type="checkbox" value='software'/>
              </div>

              {/* currently this link is a placeholder for the route */}
            </span>
            <Link to='/'>
              <button type="button" className="flex items-center mx-6 hover:bg-yellow-200 bg-blue-200 rounded-md h-10 px-3 font-semibold text-lg">Complete</button>
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
