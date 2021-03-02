import React from 'react'

export default function NewBanner () {
  return (
    <>
      <div className="w-full lg:h-72 xl:h-96  grid grid-cols-2 gap-4 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-md">
        <div className=" lg:h-72 xl:h-96 w-full py-10 ">
          <div className=" lg:ml-44 xl:ml-80 lg:mt-3 xl:mt-14">
            <h2 className=" font-Poppins font-semibold xl:text-5xl lg:text-4xl text-cgrey ">Find your next job, </h2>
            <h2 className=" font-Poppins my-3 font-semibold xl:text-5xl lg:text-4xl text-cgrey ">Find your next dev</h2>
            <h4 className="xl:text-xl lg:text-xl italic font-normal mb-3">Your dream Developer is just a click away</h4>
            <button type="button" className="buttonNoMargin">Sign up</button>
          </div>
        </div>
        <div className="lg:h-72 xl:h-96 w-full ">
          <div className="order-2 aspect-w-16 aspect-h-9 rounded-md">
            <div className="h-0 pt-p">
              <img className="h-2/3 absolute top-0 left-0 lg:ml-12 xl:ml-10 lg:mt-8 xl:mt-5 object-cover rounded-md" src='/images/placeholder-img/pic1.jpg'/>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
