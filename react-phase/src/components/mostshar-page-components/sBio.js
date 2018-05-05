import React from 'react'
import { Link } from 'react-router-dom'

const BioItem = (props) => {
        return (
          <div className="col-lg-3 col-md-6 bio-cards text-align-right">
            <div className="card bio-card-shadow">
              <div className="card-body bio-card">
                <h5 className="card-title max-title gold">{props.title}</h5>
                <p className="card-text font-size-17 overflow-hidden bio-card-content">{props.content}</p>
              </div>
              <div className="card-footer row bio-card-footer">
                <div className="col-5">
                    <Link to={props.link} className="text-muted bold gold cursor-pointer-link">{props.more}</Link>
                </div>
                <div className="col-7 social-icons-in-bio">
                  <span className="social-media-icons news-source">
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

export default BioItem;
