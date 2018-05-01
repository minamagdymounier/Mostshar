import React, {Component} from 'react'
import Header from './mostshar-page-components/header.js'
import Bio from './mostshar-page-components/bio.js'
import '../css/bootstrap.css';
import '../css/mostshar-page-style.css';

class Home extends Component {
    render() {
        return (
            <div>
                  <Header/>
                  <Bio title={"title-bio.png"}/>


            </div>
        )
    }
}

export default Home
