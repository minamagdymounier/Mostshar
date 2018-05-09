import React, {Component} from 'react'
import VideoModalBody from './VideoModalBody';
import PhotoModalBody from './PhotoModalBody';
class sliderModalItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body:props.body,
            type:props.type,
            source:props.source,
            id:props.id,
            idCarousel:props.idCarousel,
            idForCarousel:props.idForCarousel,
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
}

export default sliderModalItem
