import React from 'react'
import { Route } from 'react-router-dom'

import Explore from './components/Explore'
import Nav from './components/Nav'
import Banner from './components/Banner'
import TemplateProfilePage from './components/templates/TemplateProfilePage'
import Mobile from './components/Mobile'
import Web from './components/Web'
import Software from './components/Software'
import SearchBar from './components/SearchBar'

function App () {
  return (
    <>
      <Route exact path='/' component={Nav} />
      <Route exact path='/' component={Banner} />
      <Route exact path='/' component={SearchBar} />
      <Route exact path='/' component={Explore} />
      <Route exact path='/css' component={TemplateProfilePage} />
      <Route exact path='/mobile' component={Mobile} />
      <Route exact path='/web' component={Web} />
      <Route exact path='/software' component={Software} />
    </>
  )
}

export default App
