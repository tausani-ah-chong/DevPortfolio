import React from 'react'
import { Route } from 'react-router-dom'
import Explore from './components/Explore'
import Profile from './components/Profile'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Mobile from './components/queries/Mobile'
import Web from './components/queries/Web'
import Software from './components/queries/Software'
import SearchBar from './components/SearchBar'
import JS from './components/queries/JS'
import TS from './components/queries/TS'
import C from './components/queries/C'
import ProfileExplore from './components/ProfileExplore'
import LandingPage from './components/LandingPage'

function App () {
  return (
    <>
      <Route path='/' component={Nav} />
      <Route exact path ='/' component={LandingPage}/>
      <Route path='/explore' component={Banner} />
      <Route path='/explore' component={SearchBar} />
      <Route exact path='/explore' component={Explore} />
      <Route exact path='/explore/mobile' component={Mobile} />
      <Route exact path='/explore/web' component={Web} />
      <Route exact path='/explore/software' component={Software} />
      <Route exact path='/explore/js' component={JS} />
      <Route exact path='/explore/ts' component={TS} />
      <Route exact path='/explore/c' component={C} />
      <Route exact path='/dashboard/:id' component={Profile} />
      <Route exact path='/dashboard/:id' component={ProfileExplore}/>
    </>
  )
}

export default App
