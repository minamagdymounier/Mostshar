
import { findDOMNode } from 'react-dom'
import React from "react";
import VideoModalBody from './VideoModalBody';
import PhotoModalBody from './PhotoModalBody';
class Mediaitem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbnail:props.thumbnail,
            link:props.link,
            title:props.title,
            body:props.body,
            type:props.type,
            source:props.source,
            idModal:props.idModal,
            id:props.id,
            idCarousel:props.idCarousel,
            idForCarousel:props.idForCarousel
        };
    }
    render() {
        const MediaModalitems = () => {
            if(this.state.type==='video'){
                return (
                    <VideoModalBody
                        body={this.state.body}
                        source={this.state.source}
                        id={this.state.id}
                    />
                )
            }
            else{
                return (
                    <PhotoModalBody
                        body={this.state.body}
                        source={this.state.source}
                        id={this.state.id}
                        idCarousel={this.state.idCarousel}
                        idForCarousel={this.state.idForCarousel}
                    />
                )
            }


        };
        return (
            <div className="col-lg-3 col-md-6">
            <div>
                <div className="card card-style" ref="myMediaitem" >
                    <div className="card-hover-overlay"  onMouseOver ={()=>this.OnMouseOver()} onMouseOut={()=>this.OnMouseOut()}>
                        <img className="card-img-top " src={this.state.thumbnail}  alt="Card image cap" />
                            <div className="display-overlay">
                                <img className="itemphoto" src={this.state.link} />
                            </div>
                    </div>

                    <div className="card-body card-text-nopadding">
                        <a href="#" data-toggle="modal" data-target={this.state.idModal}>
                            <p className="media-item-font" dir="rtl">{this.state.title}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="modal fade" tabIndex={-1} id={this.state.id} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" >
                        <div className="modal-content">
                            <div className="modal-header" style={{border: "none"}}>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <section className="container" style={{margin: "40px 0px"}}>
                                <MediaModalitems />
                            </section>
                        </div>
                    </div>
                </div>

            </div>

    )
    }
    OnMouseOver() {
        let el = findDOMNode(this.refs.myMediaitem).getElementsByClassName("display-overlay");
        el[0].style.display="block";
    }

    OnMouseOut() {
        let el = findDOMNode(this.refs.myMediaitem).getElementsByClassName("display-overlay");
        el[0].style.display="none";
    }
}
export default Mediaitem;