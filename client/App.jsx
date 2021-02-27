import React from 'react'
import { Route } from 'react-router-dom'

import Explore from './components/Explore'
import Nav from './components/Nav'
import Banner from './components/Banner'
import SearchBar from './components/SearchBar'
import Mobile from './components/Mobile'

const App = () => {
  return (
    <>
      <Route to='/' component={Nav} />
      <Route to='/' component={Banner} />
      <Route to='/' component={SearchBar} />
      <Route to='/' component={Explore} />
      <Route to='/mobile' component={Mobile} />
    </>
  )
}

export default App
