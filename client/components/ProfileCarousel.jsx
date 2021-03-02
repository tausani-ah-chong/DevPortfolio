import React, { useState } from 'react'
import { connect } from 'react-redux'

function ProfileCarousel ({ dev }) {
  const [pic, setPic] = useState(1)

  if (pic > 3) {
    setPic(1)
  } else if (pic < 1) {
    setPic(3)
  }

  return (
    <div className="mr-96 xl:h-96 w-auto flex items-center">
      {/* <div className="w-c flex items-center"> */}
      {/* <img className=" w-14 h-auto opacity-20" src='/images/placeholder-img/left.png' onClick={() => setPic(pic - 1)}/> */}
      {
        dev.map(e => {
          e.projects.map(el => {
            return (
              <img key={el.projectId} src={el.projectImage} alt=""/>
            )
          })
        })
      }
      {/* <img src={`/images/placeholder-img/pic${pic}.jpg`} className="object-cover rounded-md"/> */}
      {/* <img className=" w-14 h-auto opacity-20" src='/images/placeholder-img/right.png' onClick={() => setPic(pic + 1)}/> */}
      {/* </div> */}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    devs: state.devs
  }
}

export default connect(mapStateToProps)(ProfileCarousel)
