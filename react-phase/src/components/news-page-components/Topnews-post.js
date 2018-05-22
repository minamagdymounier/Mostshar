import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Topnewspost extends Component {
  render() {
    const topnews_post = this.props.topnews_post;
    const link = `/news/${topnews_post.id}`;
    return (
      <div className="col-md-4 col-sm-6 col-xs-12 topnews">
        <img className="imgs" src={require("../../images/"+topnews_post.img)} alt={"Topnews"} />
        <div className="quote quote-white">
          <blockquote className="blockquote">
            <p className="mb-0">
              <Link to={link}>
                  {topnews_post.p}
              </Link>
            </p>
            <small className="date"> {topnews_post.date} </small>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Topnewspost;
