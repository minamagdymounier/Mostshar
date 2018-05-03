import React, { Component } from "react";

class Topnewspost extends Component {
  render() {
    const topnews_post = this.props.topnews_post;
    console.log(topnews_post.img);
    return (
      <div className="col-md-4 col-sm-6 col-xs-12 topnews">
        <img className="imgs" src={require("../../images/"+topnews_post.img)} alt={"Topnews"} />
        <div className="quote quote-white">
          <blockquote className="blockquote">
            <p className="mb-0">
                {topnews_post.p}
            </p>
            <small className="date"> {topnews_post.date} </small>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Topnewspost;
