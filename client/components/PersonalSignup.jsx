import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function PersonalSignup () {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    pronoun: '',
    profilePicture: '',
    bio: ''
  })

  function onChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <>

      <div className="w-full px-auto flex items-center flex-col pt-6">
        <h1 className="text-4xl italic font-semibold my-6">Let&apos;s get started</h1>
        {/* <h2>Add your details:</h2> */}
        <div>
          <div className="w-auto h-96 bg-gray-200 flex flex-cols p-6 m-4 rounded-md">

            <form onSubmit={handleSubmit}>
              <div className="inputDiv">
                <input className="inputBox h-8 text-xl " placeholder="First Name:" id='firstName' type='text' name='firstName' value={form.firstName} onChange={onChange} required />
                <hr className="border-black mb-4 "></hr>
              </div>

              <div className="inputDiv">
                <input className="inputBox h-8 text-xl " placeholder="Last Name:"id='lastName' type='text' name='lastName' value={form.lastName} onChange={onChange} required />
                <hr className="border-black mb-4 "></hr>
              </div>

              {/* Pronoun might be a checkbox
                She/Her
                He/Him
                They/Them
            */}
              <div className="inputDiv">
                <input className="inputBox h-8 text-xl " placeholder="Pronouns" id='pronoun' type='text' name='pronoun' value={form.pronoun} onChange={onChange} required />
                <hr className="border-black mb-4 "></hr>
              </div>

              <div className="inputDiv">
                <input className="inputBox h-8 text-xl " placeholder="Bio" id='bio' type='text' name='bio' value={form.bio} onChange={onChange} required />
                <hr className="border-black mb-4 "></hr>
              </div>

              <div className="inputDiv">
                <input className="inputBox h-8 text-xl " placeholder="Profile Picture" id='profilePicture' type='file' name='profilePicture' accept="image/png, image/jpeg" required />
              </div>

              <Link to='/more'>
                <p>Profile Picture</p>
                <button type="button" className="my-6 flex items-center mr-auto hover:bg-blue-400 bg-blue-200 rounded-md h-10 px-3 font-semibold text-lg">Next</button>
              </Link>

            </form>

          </div>
        </div>

      </div>
    </>
  )
}

export default PersonalSignup

// sign up stage 2 PersonalSignup.jsx

// first name
// last name
// pronoun
// profile picture
// bio
