import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar () {
  return (
    <div className="h-14 w-full flex justify-center">
      <Link to='/explore'>
        <button type="button" className="defaultButton">All Devs</button>
      </Link>
      <Link to='/explore/mobile'>
        <button type="button" className="defaultButton">Mobile</button>
      </Link>
      <Link to='/explore/web'>
        <button type="button" className="defaultButton">Web</button>
      </Link>
      <Link to='/explore/software'>
        <button type="button" className="defaultButton">Software</button>
      </Link>
      <Link to='/explore/js'>
        <button type="button" className="defaultButton">JS</button>
      </Link>
      <Link to='/explore/ts'>
        <button type="button" className="defaultButton">TS</button>
      </Link>
      <Link to='/explore/c'>
        <button type="button" className="defaultButton">C#</button>
      </Link>
    </div>
  )
}

export default SearchBar
