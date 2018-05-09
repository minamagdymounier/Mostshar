import React, {Component} from 'react'
class PhotoModalBody extends React.Component {
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
        if(this.state.body.length>80){
            let newString=this.state.body.substring(0, 80);
            newString=newString.concat("...");
            this.setState({body:newString});
        }
    }
    render() {
        const photoCarousel=this.state.source.map((item,index) => {
            const photO=require(`../../images/${item}`);
            if(index===0){
                return( <div  className="carousel-item active">
                    <img className="d-block w-100" src={photO}  alt={`${index}'s Slide`} />
                </div>)
            }
            return ( <div  className="carousel-item">
                <img className="d-block w-100" src={photO}  alt={`${index}'s Slide`} />
            </div>)

        });


        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body rtl"  style={{overflow:"auto",height:350}}>
                            <p className="card-text gold">{this.state.body}</p>
                            <a className="btn btn-link" href={`/media/${this.state.id}`}><p className="media-item-font" dir="rtl">الانتقال الى الصفحة</p></a>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-8 center-horizontal">
                                    <a href="#"><i className="modalicons fab fa-facebook-square"></i></a>
                                    <a href="#"><i className="modalicons fab fa-twitter"></i></a>
                                    <a href="#"><i className="modalicons fab fa-google-plus-g"></i></a>
                                    <a href="#"><i className="modalicons fab fa-linkedin-in"></i></a>
                                </div>
                                <div className="col-4 center-horizontal gold">
                                    <h4>{this.state.source.length}</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div id={this.state.idForCarousel} className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {photoCarousel}
                        </div>
                        <a className="carousel-control-prev" href={this.state.idCarousel} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href={this.state.idCarousel} role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default PhotoModalBody;