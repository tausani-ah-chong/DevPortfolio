import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar () {
  return (
    <div className="h-14 w-full flex justify-center">
      <Link to='/'>
        <button type="button" className="flex items-center mx-6 hover:bg-yellow-200 bg-gray-200 rounded-md h-10 px-3 font-semibold text-lg">All Devs</button>
      </Link>
      <Link to='/mobile'>
        <button type="button" className="flex items-center mx-6 hover:bg-yellow-200 bg-gray-200 rounded-md h-10 px-3 font-semibold text-lg">Mobile</button>
      </Link>
      <Link to='/web'>
        <button type="button" className="flex items-center mx-6 hover:bg-yellow-200 bg-gray-200 rounded-md h-10 px-3 font-semibold text-lg">Web</button>
      </Link>
      <Link to='/software'>
        <button type="button" className="flex items-center mx-6 hover:bg-yellow-200 bg-gray-200 rounded-md h-10 px-3 font-semibold text-lg">Software</button>
      </Link>
    </div>
  )
}

export default SearchBar
