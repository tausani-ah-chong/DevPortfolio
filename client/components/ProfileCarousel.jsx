import React from 'react'
import { connect } from 'react-redux'

function ProfileCarousel ({ dev }) {
  return (
    <>
      <div className="flex flex-row items-center">
        <div className="h-10 w-10 bg-red-400"></div>
        <div className="w-full order-2 aspect-w-16 aspect-h-9">
          {/* <TemplateProfileCarousel/> */}
          <div className="h-0 pt-p">
            {
              dev.map(e => {
                e.projects.map(el => {
                  return (
                    <img className="h-4/6 w-4/6 absolute top-0 left-0 lg:ml-12 xl:ml-10 lg:mt-5 xl:mt-0 object-cover rounded-md" key={el.projectId} src={el.projectImage} alt="" />
                  )
                })
              })
            }
          </div>

        </div>
        <div className="h-10 w-10 bg-red-400 mx-10"></div>
      </div>
    </>

  )
}

function mapStateToProps (state) {
  return {
    devs: state.devs
  }
}

export default connect(mapStateToProps)(ProfileCarousel)
