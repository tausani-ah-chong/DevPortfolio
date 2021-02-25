import React from 'react'
import { Route } from 'react-router-dom'

import Explore from './components/Explore'
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Route to='/' component={Nav} />
      <Route to='/' component={Explore} />
      <Route to='/' component={Footer} />
    </>
  )
}

export default App
