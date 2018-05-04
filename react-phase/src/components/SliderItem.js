import React, {Component} from 'react'
class SliderItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key:props.key,
            photo:props.photo,
            link:props.link,
            title:props.title,
            date:props.date,
            idModal:`#slider-${props.id}`,
        };
    }
    render() {
        return (

                <div  key={this.state.key} style={{maxWidth: 640,maxHeight: 288}}>
                    <img className="card-img-top img-fluid" src={this.state.photo} alt="Card image cap" style={{maxWidth: "100%" ,maxHeight: "100%" }} />
                    <div className="card-body slider-item">
                        <div className="row">
                            <div className="col-md-2">
                                <img className="img-fluid" src={this.state.link} style={{paddingTop:18}}/>
                            </div>
                            <div className="col-md-10">
                                <div className="container" style={{maxHeight:"100%",overflow: "hidden",marginBottom:4}}>
                                    <a href="#" data-toggle="modal" data-target={this.state.idModal}>
                                        <p className="slider-font" dir="rtl">{this.state.title}
                                        </p>
                                    </a>
                                </div>
                                <p className="container slider-date-font" dir="rtl">{this.state.date} </p>
                            </div>
                        </div>
                    </div>
                </div>


        )
    }
}

export default SliderItem
