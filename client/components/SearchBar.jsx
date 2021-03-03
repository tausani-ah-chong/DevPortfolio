import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar () {
  return (
    <div className="relative">
      <div className="h-14 w-full flex justify-center items-center absolute ">

        <Link to='/explore'>
          <button type="button" className="buttonSearchBar">All Devs</button>
        </Link>

        <Link to='/explore/mobile'>
          <button type="button" className="buttonSearchBar">Mobile</button>
        </Link>

        <Link to='/explore/web'>
          <button type="button" className="buttonSearchBar">Web</button>
        </Link>

        <Link to='/explore/software'>
          <button type="button" className="buttonSearchBar">Software</button>
        </Link>

        <Link to='/explore/js'>
          <button type="button" className="buttonSearchBar">JS</button>
        </Link>

        <Link to='/explore/ts'>
          <button type="button" className="buttonSearchBar">TS</button>
        </Link>

        <Link to='/explore/c'>
          <button type="button" className="buttonSearchBar">C#</button>
        </Link>
      </div>
    </div>
  )
}

export default SearchBar
