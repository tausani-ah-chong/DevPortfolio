import React from 'react'
import { Route } from 'react-router-dom'

import Explore from './components/Explore'
import Nav from './components/Nav'
import Banner from './components/Banner'
import SearchBar from './components/SearchBar'
import Mobile from './components/Mobile'
import Web from './components/Web'

const App = () => {
  return (
    <>
      <Route path='/' component={Nav} />
      <Route path='/' component={Banner} />
      <Route path='/' component={SearchBar} />
      <Route exact path='/' component={Explore} />
      <Route exact path='/mobile' component={Mobile} />
      <Route exact path='/web' component={Web} />
    </>
  )
}

export default App
