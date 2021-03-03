import React, { useState } from 'react'
import consume from '../consume'
import { useParams } from 'react-router-dom'

function PersonalSignup (props) {
  const { uid } = useParams()

  const [form, setForm] = useState({
    uuid: '',
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
      [name]: value,
      uuid: uid
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    consume(`/dev/get-started/${uid}`, 'post', form)
      .then((res) => {
        props.history.push(`/more/${res.body}`)
        return null
      })
      .catch(err => console.error(err.message))
  }

  return (
    <>

      <div className="w-full px-auto flex items-center flex-col lg:p-0 xl:pt-10">
        <h1 className="text-2xl xl:text-4xl italic font-semibold mb-3">Let&apos;s get started</h1>
        {/* <h2>Add your details:</h2> */}
        <div>
          <div className="w-auto h-auto bg-gray-200 flex flex-cols lg:p-4 xl:p-6 m-4 rounded-md">

            <form onSubmit={handleSubmit}>
              <div className="inputDiv">
                <input className="inputBox placeHolderText " placeholder="First Name:" id='firstName' type='text' name='firstName' value={form.firstName} onChange={onChange} required />
                <hr className="border-black mb-4 "></hr>
              </div>

              <div className="inputDiv">
                <input className="inputBox placeHolderText " placeholder="Last Name:" id='lastName' type='text' name='lastName' value={form.lastName} onChange={onChange} required />
                <hr className="border-black mb-4 "></hr>
              </div>

              <div className="inputDiv">
                <input className="inputBox placeHolderText " placeholder="Pronouns:" id='pronoun' type='text' name='pronoun' value={form.pronoun} onChange={onChange} required />
                <hr className="border-black mb-4 "></hr>
              </div>

              {/* PROFIL PHOTO */}

              {/* <div className="mt-4 flex flex-col"> */}
              {/* <input hidden='true' value='' className="inputBox placeHolderText mb-2" placeholder="Profile Picture" id='profilePicture' type='file' name='profilePicture' accept="image/png, image/jpeg" /> */}
              {/* <hr className="border-black mb-4 "></hr> */}
              {/* </div> */}

              {/* BIO  */}
              <div className="inputDiv flex flex-col">
                <label className="lg:text-lg xl:text-xl">Bio:</label>
                <textarea className="inputBox noResize h-32 text-lg border-cgrey border-2 rounded-md p-1" placeholder="" id='bio' type='text' name='bio' value={form.bio} onChange={onChange} required />
              </div>

              {/* NEXT BUTTON */}

              <button className=" focus:outline-none mt-6 flex items-center mr-auto hover:bg-blue-400 bg-blue-200 rounded-md h-10 px-3 font-semibold text-lg">Next</button>

            </form>

          </div>
        </div>

      </div>
    </>
  )
}

export default PersonalSignup
