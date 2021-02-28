import React, { useState } from 'react'

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
      [name]: [value]
    })
  }

  return (
    <>
      <label htmlFor='firstName'>First Name</label>
      <input id='firstName' type='text' name='firstName' value={form.firstName} required></input>

      <label htmlFor='lastName'>Last Name</label>
      <input id='lastName' type='text' name='lastName' value={form.lastName} required></input>

      <label htmlFor='pronoun'>Pronoun</label>
      <input id='pronoun' type='text' name='pronoun' value={form.pronoun} required></input>

      <label htmlFor='profilePicture'>Profile Picture</label>
      <input id='profilePicture' type='media' name='profilePicture' value={form.profilePicture} required></input>

      <label htmlFor='bio'>Bio</label>
      <input id='bio' type='text' name='bio' value={form.bio} required></input>
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
