import React from 'react'
import { Route } from 'react-router-dom'

import Explore from './components/Explore'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Mobile from './components/Mobile'
import Web from './components/Web'
import Software from './components/Software'
import Template from './components/Template'
import SearchBar from './components/SearchBar'

function App () {
  <>
    <Route path='/' component={Nav} />
    <Route path='/' component={Banner} />
    <Route path='/' component={SearchBar} />
    <Route exact path='/' component={Explore} />
    <Route exact path='/mobile' component={Mobile} />
    <Route exact path='/web' component={Web} />
    <Route exact path='/software' component={Software} />
    <Route exact path='/css' component={Template} />
  </>
}

export default App
