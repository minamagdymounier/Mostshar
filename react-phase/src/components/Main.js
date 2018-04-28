import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Bio from './Bio'
import Media from './Media'
import ContactUs from './ContactUs'
import News from './News'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/bio' component={Bio}/>
      <Route path='/media' component={Media}/>
      <Route path='/contact-us' component={ContactUs}/>
      <Route path='/news' component={News}/>
    </Switch>
  </main>
)

export default Main
