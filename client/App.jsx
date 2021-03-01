import React from 'react'
import { Route } from 'react-router-dom'
import Explore from './components/Explore'
import Nav from './components/Nav'
import Banner from './components/Banner'
import TemplateProfilePage from './components/templates/TemplateProfilePage'
import Mobile from './components/Mobile'
import Web from './components/Web'
import Software from './components/Software'
import AuthSignup from './components/AuthSignup'
import SearchBar from './components/SearchBar'
import PersonalSignup from './components/PersonalSignup'
import MoreInfoSignup from './components/MoreInfoSignup'
import TemplateVisible from './components/templates/TemplateVisible'

function App () {
  return (
    <>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Banner} />
      <Route exact path='/' component={SearchBar} />
      <Route exact path='/' component={Explore} />
      <Route exact path='/css' component={TemplateProfilePage} />
      <Route exact path='/visible' component={TemplateVisible} />
      <Route exact path='/mobile' component={Mobile} />
      <Route exact path='/web' component={Web} />
      <Route exact path='/software' component={Software} />
      <Route path='/signup' component={AuthSignup} />
      <Route path='/get-started' component={PersonalSignup} />
      <Route path='/more/:id' component={MoreInfoSignup} />
    </>
  )
}

export default App
