import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import NotFoundNavbar from "../components/404-page-components/Navbar404";
import ErrorContent from "../components/404-page-components/Error-content";
import "../css/bootstrap.css";
import "../css/404.css";

class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <Redirect to="/404" push />
        <NotFoundNavbar />
        <ErrorContent />
      </div>
    );
  }
}
export default NotFound;
