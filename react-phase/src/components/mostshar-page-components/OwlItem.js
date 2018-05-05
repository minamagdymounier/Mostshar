import React from 'react'

const OwlItem = (props) => {
        return (
          <div className="item media-owl-item">
						<div className="card owl-card">
							<div className="card-img-top media-card-img">
								<img className="media-img" src={require("../../images/"+props.image)} alt="Card image cap"></img>
								<a className="media-overlay" href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
									<i className={"overlay-item "+props.type}></i>
								</a>
							</div>
							<div className="card-body  dark-grey media-card-body" >
								<p className="card-text media-card-content">{props.content}</p>
							</div>
						</div>
          </div>
        );
}

export default OwlItem;
