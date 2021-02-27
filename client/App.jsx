import React from 'react'
import { Route } from 'react-router-dom'

import Explore from './components/Explore'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Banner from './components/Banner'

const App = () => {
  return (
    <>
      <Route to='/' component={Nav} />
      <Route to='/' component={Banner} />
      <Route to='/' component={SearchBar} />
      <Route to='/' component={Explore} />
    </>
  )
}

export default App
