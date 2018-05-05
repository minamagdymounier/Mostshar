import React, { Component } from "react";
import { Link } from 'react-router-dom'

class NotFoundNavbar extends Component {
  render() {
    return (
      <div>
      <div className="horz-header"></div>
      <section className="navbar-section">
        <nav  className="navbar navbar-expand-lg">
          <div dir="rtl" className="container">
            <Link to="/" className="navbar-brand">
              <img src={require("../../images/MAbdElsalam.png")} alt={"MAbdElsalam"} />
            </Link>
            <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse mynavbar" id="navbarNavDropdown" >

              <ul className="nav" style={{paddingTop: "20px",paddingRight:"14vw",marginRight: "auto"}}>
                <li className="nav-item naavitem nv-search">
                  <form className="form-inline">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <a className="input-group-text search-icon2" id="basic-addon1" href="#"><i className="icons fas fa-search icon-color-1"></i></a>
                      </div>
                      <input type="text" className="form-control search-input" placeholder="بحث" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                  </form>
                </li>
                <li className="nav-item naavitem">
                  <a className="nav-link" href="#">
                    <i className="icons fab fa-linkedin-in fa-lg icon-color-1"></i>


                  </a>
                  <span className="sr-only">(current)</span>
                </li>
                <li className="nav-item naavitem">
                  <a className="nav-link" href="#">
                    <i className="icons fab fa-google-plus-g fa-lg icon-color-1"></i>

                  </a>
                  <span className="sr-only">(current)</span>
                </li>
                <li className="nav-item naavitem">
                  <a className="nav-link" href="#">
                    <i className="icons fab fa-instagram fa-lg  icon-color-1"></i>

                  </a>
                  <span className="sr-only">(current)</span>
                </li>
                <li className="nav-item naavitem">
                  <a className="nav-link" href="#">
                    <i className="icons fab fa-twitter fa-lg icon-color-2"></i>

                  </a>
                  <span className="sr-only">(current)</span>
                </li>
                <li className="nav-item naavitem">
                  <a className="nav-link" href="#">
                    <i className="icons fab fa-facebook fa-lg icon-color-1"></i>

                  </a>
                  <span className="sr-only">(current)</span>
                </li>
              </ul>
            </div>
          </div>

        </nav>
      </section>
      </div>
    );
  }
}

export default NotFoundNavbar;
