import React from 'react'

function SearchBar () {
  return (
    <div className="h-14 w-full bg-green-600 flex justify-center">
      <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">All</button>
      <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">Front End</button>
      <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">Back End</button>
      <button type="button" className="focus:outline-none text-black text-sm py-2.5 px-5 rounded-md border border-white hover:bg-blue-50 mx-6">Full Stack</button>
    </div>
  )
}

export default SearchBar
