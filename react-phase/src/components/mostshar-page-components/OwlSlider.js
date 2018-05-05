import React, {Component} from 'react';
import InBetween from './inBetween';
import LoadOwls from '../Loaders/LoadOwls';
import  Slideritemmodal from '../sliderModalItem';
import ModalLoader from '../Loaders/ModalLoader'

class OwlSlider extends Component {

    constructor(props)
    {
      super(props);
      this.state = {
          modalItems :[],
          Owls : []
      }
    }

    componentWillMount()
    {
      this.setState({
          modalItems : [
              {id:1,source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo',body:"قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوار"},
              {id:2, thumbnail: "mustashar.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', body:"قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوار"},
              {id:3, thumbnail: "mustashar.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', body:"قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوار"},
              {id:4, thumbnail: "mustashar.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', body:"قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوار"},
              {id:5, thumbnail: "mustashar.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', body:"قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوار"},
              {id:6, thumbnail: "mustashar.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', body:"قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوار"},
              {id:7, thumbnail: "mustashar.png",source:["Mustashar2.png","Mustashar2.png","Mustashar2.png"], type: 'photo', body:"قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوار"},
              {id:8, thumbnail: "mustashar.png",source:"https://www.youtube.com/embed/AMrgBrcFefw", type: 'video', body:"قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوار"},
          ],
          Owls :
          [
              {id:1,modal_id:1 , image:"human.png" ,type:"photo" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:2,modal_id:2 , image:"human.png" ,type:"video" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:3,modal_id:3 , image:"human.png" ,type:"photo" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:4,modal_id:4 , image:"human.png" ,type:"video" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:5,modal_id:5 , image:"human.png" ,type:"photo" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:6,modal_id:6 , image:"human.png" ,type:"video" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:7,modal_id:7 , image:"human.png" ,type:"photo" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
              {id:8,modal_id:8 , image:"human.png" ,type:"video" , content:"Somessss sssss sssssssssss sssss sssss sssq uick example text to build on the card title and make up the bulk of the card's content."},
          ]
      });
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
                <ModalLoader modalItems={this.state.modalItems} />
          </section>
        )
    }
}

export default OwlSlider
