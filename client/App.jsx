import React from 'react'
import { Route } from 'react-router-dom'

import Explore from './components/Explore'
import Nav from './components/Nav'
const App = () => {
  return (
    <>
      <Route to='/' component={Explore} />
      <Route to='/' component={Nav} />
    </>
  )
}

export default App
