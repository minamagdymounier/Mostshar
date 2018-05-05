import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Bio from './Bio'
import Media from './Media'
import ContactUs from './ContactUs'
import News from './News'
import NotFound from './NotFound'
import NewDetails from './NewDetails.js'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
// facebook route for facebook icon links
// twitter route for twitter icon links
class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/bio' component={Bio}/>
                    <Route path='/media' component={Media}/>
                    <Route path='/contact-us' component={ContactUs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/facebook' component={() => window.location = 'https://www.facebook.com'}/>
                    <Route path='/twitter' component={() => window.location = 'https://www.twitter.com'}/>
                    <Route path="/NewDetails" component={NewDetails}/>
                    <Route component={NotFound} />
                </Switch>
            </main>
        )
    }
}

export default Main;
