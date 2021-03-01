import React from 'react'
import { Route } from 'react-router-dom'
import Explore from './components/Explore'
import Profile from './components/Profile'
import Nav from './components/Nav'
import Banner from './components/Banner'
import TemplateProfilePage from './components/templates/TemplateProfilePage'
import Mobile from './components/queries/Mobile'
import Web from './components/queries/Web'
import Software from './components/queries/Software'
import AuthSignup from './components/AuthSignup'
import SearchBar from './components/SearchBar'
import PersonalSignup from './components/PersonalSignup'
import MoreInfoSignup from './components/MoreInfoSignup'
import TemplateVisible from './components/templates/TemplateVisible'
import { AuthProvider } from './contexts/AuthContext'
import JS from './components/queries/JS'
import TS from './components/queries/TS'
import C from './components/queries/C'

function App () {
  return (
    <>
      <AuthProvider>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Banner} />
        <Route exact path='/' component={SearchBar} />
        <Route exact path='/' component={Explore} />
        <Route exact path='/css' component={TemplateProfilePage} />
        <Route exact path='/visible' component={TemplateVisible} />
        <Route exact path='/mobile' component={Mobile} />
        <Route exact path='/web' component={Web} />
        <Route exact path='/software' component={Software} />
        <Route exact path='/js' component={JS} />
        <Route exact path='/ts' component={TS} />
        <Route exact path='/c' component={C} />
        <Route path='/signup' component={AuthSignup} />
        <Route path='/get-started' component={PersonalSignup} />
        <Route path='/more/:id' component={MoreInfoSignup} />
        <Route exact path='/dashboard' component={Profile}/>
      </AuthProvider>
    </>
  )
}

export default App
