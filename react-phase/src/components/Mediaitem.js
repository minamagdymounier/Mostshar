
import { findDOMNode } from 'react-dom'
import React from "react";
class Mediaitem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo:props.photo,
            link:props.link,
            title:props.title,
            idModal:`#${props.id}`,
            id:props.id,
            idcarousel:`#item${props.id}`,
            idForCarousel:`item${props.id}`
        };
    }
    render() {
        return (
            <div className="col-lg-3 col-md-6">
            <div>
                <div className="card card-style" ref="myMediaitem" >
                    <div className="card-hover-overlay"  onMouseOver ={()=>this.OnMouseOver()} onMouseOut={()=>this.OnMouseOut()}>
                        <img className="card-img-top " src={this.state.photo}  alt="Card image cap" />
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
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body rtl">
                                    <p className="card-text gold">كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.كتاب يحكي عن الجانب النقدي في فلسفة أبي البركات البغدادي.كتاب</p>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-8 center-horizontal">
                                            <a href=""><i className="modalicons fab fa-facebook-square"></i></a>
                                            <a href=""><i className="modalicons fab fa-twitter"></i></a>
                                            <a href=""><i className="modalicons fab fa-google-plus-g"></i></a>
                                            <a href=""><i className="modalicons fab fa-linkedin-in"></i></a>
                                        </div>
                                        <div className="col-4 center-horizontal gold">
                                            <h4>1/8</h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8">
                                <div id={this.state.idForCarousel} className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src="http://via.placeholder.com/500x350" alt="First slide" />
                                        </div>
                                        <div  className="carousel-item">
                                            <img className="d-block w-100" src="http://via.placeholder.com/500x350"  alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="http://via.placeholder.com/500x350"  alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href={this.state.idcarousel} role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href={this.state.idcarousel} role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                        </div>
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