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
      <form onSubmit={handleSubmit}>

        <label htmlFor='firstName'>First Name</label>
        <input id='firstName' type='text' name='firstName' value={form.firstName} onChange={onChange} required />

        <label htmlFor='lastName'>Last Name</label>
        <input id='lastName' type='text' name='lastName' value={form.lastName} onChange={onChange} required />

        <label htmlFor='pronoun'>Pronoun</label>
        <input id='pronoun' type='text' name='pronoun' value={form.pronoun} onChange={onChange} required />

        <label htmlFor='profilePicture'>Profile Picture</label>
        <input id='profilePicture' type='media' name='profilePicture' value={form.profilePicture} onChange={onChange} required />

        <label htmlFor='bio'>Bio</label>
        <input id='bio' type='text' name='bio' value={form.bio} onChange={onChange} required />

        <Link to='/moreinfo'>
          <button>Next</button>
        </Link>

      </form>
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
