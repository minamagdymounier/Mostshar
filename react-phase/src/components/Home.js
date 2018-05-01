import React, {Component} from 'react'
import Header from './mostshar-page-components/header.js'
import Bio from './mostshar-page-components/bio.js'
import Qoutation from './shared/qoutation_slider.js'
import '../css/bootstrap.css';
import '../css/mostshar-page-style.css';
import '../css/qoutation_slider.css';

class Home extends Component {
    render() {
        return (
            <div>
                  <Header/>
                  <Bio title={"title-bio.png"} link={"/bio"}/>
                  <Qoutation image={"human2.png"}/>
            </div>
        )
    }
}

export default Home
