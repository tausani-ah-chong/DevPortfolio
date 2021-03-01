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
import { AuthProvider } from './contexts/AuthContext'

function App () {
  return (
    <>
      <AuthProvider>
        <Route path='/' component={Nav} />
        <Route path='/' component={Banner} />
        <Route path='/' component={SearchBar} />
        <Route exact path='/' component={Explore} />
        <Route exact path='/css' component={TemplateProfilePage} />
        <Route exact path='/visible' component={TemplateVisible} />
        <Route exact path='/mobile' component={Mobile} />
        <Route exact path='/web' component={Web} />
        <Route exact path='/software' component={Software} />
        <Route path='/signup' component={AuthSignup} />
        <Route path='/get-started' component={PersonalSignup} />
        <Route path='/more' component={MoreInfoSignup} />
      </AuthProvider>
    </>
  )
}

export default App
