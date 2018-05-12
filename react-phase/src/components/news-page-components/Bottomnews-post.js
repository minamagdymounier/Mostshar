import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Bottomnewspost extends Component {
  render() {
    const bottomnews_post = this.props.bottomnews_post;
    const link = "/news/1";
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 bottomnews">
        <div className="newsblock">
          <img className="smaller-imgs" src={require("../../images/"+bottomnews_post.img)} alt={"Bottomnews"} />
          <div className="quote quote-white-no-opacity">
            <p className="content">
              <Link to={link}>
                {bottomnews_post.p}
              </Link>
            </p>
            <div className="news-footer">
              <div className="row">
                <div className="col-7 icons">
                  <Link className="icon-link fb-link" to={"/facebook"}>
                    <i className="fab fa-facebook-f icon"></i>
                  </Link>
                  <Link className="icon-link tw-link" to={"/twitter"}>
                    <i className="fab fa-twitter icon"></i>
                  </Link>
                </div>
                <div className="col-5 footer-button">
                  <Link to="#">
                    {bottomnews_post.link}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Bottomnewspost;
