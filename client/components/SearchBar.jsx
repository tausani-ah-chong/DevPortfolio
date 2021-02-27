import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar () {
  return (
    <div className="h-14 w-full bg-green-600 flex justify-center">
      <Link to='/'>
        <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">All Devs</button>
      </Link>
      <Link to='/mobile'>
        <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">Mobile</button>
      </Link>
      <Link to='/web'>
        <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">Web</button>
      </Link>
      <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">Software</button>
    </div>
  )
}

export default SearchBar
