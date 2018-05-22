import React from 'react'
import { Link } from 'react-router-dom'

const MainNewsItem = (props) => {
        return (

  					<div className="card mainNewItemParentCard">
  						<img className="card-img-top main-news-item-img"  src={require("../../images/"+props.image)} alt="main news"></img>
  						<div className="card-body main-news-item-title">
                <p className="card-title news-title">
  							<Link to="/NewDetails" className="bold gold">{props.title}</Link>
                </p>
  							<small className="card-title main-sub-news dark-grey">{props.content}</small>
  						</div>
  						<div className=" row bio-card-footer">
  							<div className="col-6">
  								<a href={props.refrence_link}>
  									<small className="text-muted bold dark-grey cursor-pointer-link border">{props.refrence}</small>
  								</a>
  							</div>
  							<div className="col-6 social-icons-in-bio">
  								<span className="social-media-icons">
  									<i className="fab fa-twitter cursor-pointer-link"></i>
  								</span>
  								<span>
  									<i className="fab fa-facebook-f cursor-pointer-link"></i>
  								</span>
  							</div>
  						</div>

  					</div>

        );
}

export default MainNewsItem;
