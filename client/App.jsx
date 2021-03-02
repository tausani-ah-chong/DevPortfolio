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
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import NewBanner from './components/templates/NewBanner'

function App () {
  return (
    <>
      <AuthProvider>
        <Route path='/' component={Nav} />
        <Route exact path ='/grid' component={NewBanner}/>
        <Route path='/explore' component={NewBanner} />
        <Route path='/explore' component={SearchBar} />
        <Route exact path='/explore/alldevs' component={Explore} />
        <Route exact path='/profile' component={TemplateProfilePage} />
        <Route exact path='/explore/visible' component={TemplateVisible} />
        <Route exact path='/explore/mobile' component={Mobile} />
        <Route exact path='/explore/web' component={Web} />
        <Route exact path='/explore/software' component={Software} />
        <Route exact path='/explore/js' component={JS} />
        <Route exact path='/explore/ts' component={TS} />
        <Route exact path='/explore/c' component={C} />
        <Route path='/signup' component={AuthSignup} />
        <Route path='/get-started' component={PersonalSignup} />
        <Route path='/more/:id' component={MoreInfoSignup} />
        <PrivateRoute exact path='/dashboard/:id' component={Profile}/>
        <Route path='/login' component={Login} />
      </AuthProvider>
    </>
  )
}

export default App
