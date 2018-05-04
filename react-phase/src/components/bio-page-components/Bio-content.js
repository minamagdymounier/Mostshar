import React, { Component } from "react";

class Biocontent extends Component {
  render() {
    const bio = this.props.bio;
    return (
      <div className="bio-info">
          <h6 className="title"> {bio.title} </h6>
          <p className="description"> {bio.content} </p>
      </div>
    );
  }
}

export default Biocontent;
