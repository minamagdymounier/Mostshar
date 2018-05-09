import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Media from './Media'
import MediaDetails from './MediaDetails'

class MediaPage extends Component {
    render() {
        return (

            <Switch>
                <Route exact path='/media' component={Media}/>
                <Route path='/media/:number' component={MediaDetails}/>
            </Switch>

        )
    }
}

export default MediaPage;