import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import NewsRoot from './news-page-components/NewsRoot'
import NewsPost from './news-page-components/News-post'
import '../css/bootstrap.css'
import '../css/style.css'

class News extends Component{
    render() {
        return (
          <Switch>
              <Route exact path='/news' component={NewsRoot}/>
              <Route path='/news/:number' component={NewsPost}/>
          </Switch>
        );
    }
}
export default News;
