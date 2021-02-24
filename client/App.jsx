import React from 'react'
import { Route } from 'react-router-dom'

import Explore from './components/Explore'

const App = () => {
  return (
    <Route to='/' component={Explore} />
  )
}

export default App
