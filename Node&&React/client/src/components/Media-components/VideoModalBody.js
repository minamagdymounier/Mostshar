import React, {Component} from 'react'
class VideoModalBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body:props.body,
            source:props.source,
            id:props.id
        };
        if(this.state.body.length>80){
            let newString=this.state.body.substring(0, 80);
            newString=newString.concat("...");
            this.setState({body:newString});
        }
    }
    render() {

        return <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-body rtl"  style={{overflow:"auto",height:350}}>
                        <p className="card-text gold">{this.state.body}</p>
                        <a className="btn btn-link" href={`/media/${this.state.id}`}><p className="media-item-font" dir="rtl">الانتقال الى الصفحة</p></a>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-7 center-horizontal">
                                <a href="#"><i className="modalicons fab fa-facebook-square"></i></a>
                                <a href="#"><i className="modalicons fab fa-twitter"></i></a>
                                <a href="#"><i className="modalicons fab fa-google-plus-g"></i></a>
                                <a href="#"><i className="modalicons fab fa-linkedin-in"></i></a>
                            </div>
                            <div className="col-5 center-horizontal gold">
                                <h5>video</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={this.state.source} allowFullScreen> </iframe>
                </div>
            </div>

        </div>
    }
}

export default VideoModalBody;