import React from 'react'
import { Route } from 'react-router-dom'

import Explore from './components/Explore'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Template from './components/Template'

const App = () => {
  return (
    <>
      <Route to='/' component={Nav} />
      <Route to='/' component={Explore} />
      <Route to='/' component={Footer} />
      <Template image="../server/public/pic336.jpg"/>
    </>
  )
}

export default App
