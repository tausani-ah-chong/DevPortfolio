import React from 'react'
import { Link } from 'react-router-dom'

function MoreInfoSignup () {
  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>

          <p>What programming Languages do you know?</p>

          <div>
            <label htmlFor='JS'>JS</label>
            <input id='JS' type="checkbox" value='JS' />
          </div>

          <div>
            <label htmlFor='C#'>C#</label>
            <input id='C#' type="checkbox" value='C#' />
          </div>

          <div>
            <label htmlFor='TS'>TS</label>
            <input id='TS' type="checkbox" value='TS' />
          </div>

          <p>What platforms do you work on?</p>

          <div>
            <label htmlFor='web'>Web</label>
            <input id='web' type="checkbox" value='web'/>
          </div>

          <div>
            <label htmlFor='mobile'>Mobile</label>
            <input id='mobile' type="checkbox" value='mobile'/>
          </div>

          <div>
            <label htmlFor='software'>Software</label>
            <input id='software' type="checkbox" value='software'/>
          </div>

          {/* currently this link is a placeholder for the route */}
          <Link to='/'>
            <button>Complete</button>
          </Link>

        </form>
      </div>
    </>
  )
}

export default MoreInfoSignup

// sign up stage 3 MoreInfoSignup

// languages --buttons for selecting lang or highlight all
// platforms --buttons for selecting platforms or highlight all
