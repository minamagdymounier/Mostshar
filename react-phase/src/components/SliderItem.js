import React, {Component} from 'react'

const SliderItem = ( props ) => {
    return (
        <div  key={props.key} style={{maxWidth: 640,maxHeight: 288}}>
            <img className="card-img-top img-fluid" src={props.photo} alt="Card image cap" style={{maxWidth: "100%" ,maxHeight: "100%" }} />
            <div className="card-body slider-item">
                <div className="row">
                    <div className="col-md-2">
                        <img className="img-fluid" src={props.link} style={{paddingTop:18}}/>
                    </div>
                    <div className="col-md-10">
                        <div className="container" style={{maxHeight:"100%",overflow: "hidden",marginBottom:4}}>
                            <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
                                <p className="slider-font" dir="rtl">{props.title}
                                </p>
                            </a>
                        </div>
                        <p className="container slider-date-font" dir="rtl">{props.date} </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SliderItem
