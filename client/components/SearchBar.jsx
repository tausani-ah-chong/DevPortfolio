import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar () {
  return (
    <div className="h-14 w-full flex justify-center items-center">
      <Link to='/'>
        <button type="button" className="buttonSearchBar">All Devs</button>
      </Link>

      <Link to='/mobile'>
        <button type="button" className="buttonSearchBar">Mobile</button>
      </Link>

      <Link to='/web'>
        <button type="button" className="buttonSearchBar">Web</button>
      </Link>

      <Link to='/software'>
        <button type="button" className="buttonSearchBar">Software</button>
      </Link>

      <Link to='/js'>
        <button type="button" className="buttonSearchBar">JS</button>
      </Link>

      <Link to='/ts'>
        <button type="button" className="buttonSearchBar">TS</button>
      </Link>

      <Link to='/c'>
        <button type="button" className="buttonSearchBar">C#</button>
      </Link>

    </div>
  )
}

export default SearchBar
