import React from 'react'

const SubNewsItem = (props) => {
        return (
          <div className="col-md-6">
            <div className="card">
              <img className="card-img-top sub-news-image"  src={require("../../images/"+props.image)} alt="sub news"></img>
              <div className="card-body sub-news-card">
                <small className="card-title sub-news gold" >{props.title}</small>
              </div>
              <div className=" row bio-card-footer">
                <div className="col-6">
                  <a href={props.refrence_link}>
                    <small className="text-muted bold gold cursor-pointer-link border">{props.refrence}</small>
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
          </div>
        );
}

export default SubNewsItem;
