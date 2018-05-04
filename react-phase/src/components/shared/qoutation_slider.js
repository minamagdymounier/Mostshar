import React, {Component} from 'react'
import LoadItems from './LoadSliderItems.js'

class Qoutation extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      qoutes : [
        {
        id:1,
        active : "active",
        author : "المستشار محمد",
        content :"إن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربة",
      },
      {
      id:2,
      author : "المستشار محمد",
      content :"إن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربة",
    }
      ]
    }
  }
  render() {
    return(
      <section className="qoutation-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <img className="qutation_image" src={require("../../images/"+this.props.image)} alt=""></img>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8"  >
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                  <LoadItems qoutes = {this.state.qoutes}/>
            </div>
          </div>

        </div>
      </div>
    </section>
    );
  }
};

export default Qoutation;
