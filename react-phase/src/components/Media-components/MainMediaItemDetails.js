import React, {Component} from 'react'
import ItemPhotoCarousel from './ItemPhotoCarousel'
const MainMediaItemDetails = (props) => {
    let mediasource;
    if(props.MediaPost.type==='photo'){
        let obj={source:props.MediaPost.source,id:props.MediaPost.id,idCarousel:`#item${props.MediaPost.id}`, idForCarousel:`item${props.MediaPost.id}`}
        mediasource=<div className="col-lg-12">
            <ItemPhotoCarousel MediaPostwzCarousel={obj} />
        </div>
    }
    else{
        mediasource=<div className="col-lg-12 embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={props.MediaPost.source} allowFullScreen> </iframe>
        </div>
    }
    return (
        <div className="card sub-news-card-p">
            <img className="card-img-top" src={require(`../../images/${props.MediaPost.thumbnail}`)} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text sub-news-title gold">{props.MediaPost.title}</p>
            </div>
            <div className="row" style={{margin:0}}>
                    {mediasource}
            </div>
            <div className="row SMSNews">
                <div className="col-6">
                <span className="sNewsSocial">
                  <i className="fab fa-twitter cursor-pointer-link dark-grey"></i>
                </span>
                    <span className="sNewsSocial">
                  <i className="fab fa-facebook-f cursor-pointer-link dark-grey"></i>
                </span>
                </div>
                <div className="col-6 text-center">
                </div>
            </div>
            <p className="card-text sub-news-footer-content dark-grey">{props.MediaPost.body}</p>
        </div>
    )
}


export default MainMediaItemDetails;