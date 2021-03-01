import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar () {
  return (
    <div className="h-14 w-full flex justify-center items-center">
      <Link to='/'>
        <button type="button" className="defaultButton">All Devs</button>
      </Link>
      <Link to='/mobile'>
        <button type="button" className="defaultButton">Mobile</button>
      </Link>
      <Link to='/web'>
        <button type="button" className="defaultButton">Web</button>
      </Link>
      <Link to='/software'>
        <button type="button" className="defaultButton">Software</button>
      </Link>
    </div>
  )
}

export default SearchBar
