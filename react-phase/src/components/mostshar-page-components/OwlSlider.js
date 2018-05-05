import React, {Component} from 'react';
import InBetween from './inBetween.js';
import LoadOwls from '../Loaders/LoadOwls.js'

class OwlSlider extends Component {

    constructor(props)
    {
      super(props);
      this.state = {
          Owls :
          [
              {id:1 , image:"human.png" ,type:"video" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:2 , image:"human.png" ,type:"photo" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:3 , image:"human.png" ,type:"video" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:4 , image:"human.png" ,type:"video" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:5 , image:"human.png" ,type:"photo" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:6 , image:"human.png" ,type:"photo" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:7 , image:"human.png" ,type:"photo" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:8 , image:"human.png" ,type:"video" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:9 , image:"human.png" ,type:"video" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
          ]
      }
    }

    render() {
        return (
          <section className="media-section">
              <div className="container">
                  <InBetween title={this.props.title} link={this.props.link}/>
                  <div className="row">
                        <LoadOwls Owls = {this.state.Owls}/>
                  </div>
              </div>
          </section>
        )
    }
}

export default OwlSlider
