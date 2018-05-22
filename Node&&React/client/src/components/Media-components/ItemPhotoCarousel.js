import React, {Component} from 'react'
class ItemPhotoCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos:props.MediaPostwzCarousel.source,
            id:props.MediaPostwzCarousel.id,
            idCarousel:props.MediaPostwzCarousel.idCarousel,
            idForCarousel:props.MediaPostwzCarousel.idForCarousel
        };
        console.log(this.state);
    }
    render(){

           const photos= this.state.photos.map((item, index) => {
                const photO = require(`../../images/${item}`);
                if (index === 0) {
                    return (
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={photO} alt={`${index}'s Slide`}/>
                        </div>)
                }
                return (<div className="carousel-item">
                    <img className="d-block w-100" src={photO} alt={`${index}'s Slide`}/>
                </div>)

            })

        return(
            <div id={this.state.idForCarousel} className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {photos}
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
        )
    }

}
export default ItemPhotoCarousel