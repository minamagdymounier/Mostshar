import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { findDOMNode } from 'react-dom'
import $ from 'jquery'
import '../css/bootstrap.min.css';
import '../css/media.css';
import '../css/navbar.css';

class Header extends Component{
    render(){
      const path = window.location.pathname.slice(1);
      if(path == "404"){          // If the path is wrong go to 404 page and dont render the Header
        return null;
      }
        return(
            <div className="nav-sectionlight fixed-top">
                <div className="horz-header"></div>
                <nav  className="navbar navbar-expand-lg">
                    <div dir="rtl" className="container" style={{maxHeight: "100%"}}>
                        <Link className="nav-link" to='/'>
                            <img src={require('../images/MAbdElsalam.png')} alt={'Hello'}/></Link>
                        <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav" style={{paddingTop: 20}}>
                                <li className="nav-item nvbar-right">
                                    <Link className="nav-link" to='/bio'><paragraph className="navbar-font" >السيرة الذاتية
                                    </paragraph> <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item nvbar-right">
                                    <Link className="nav-link" to='/news'><paragraph className="navbar-font" >أخبار
                                    </paragraph> <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item nvbar-right">
                                    <Link className="nav-link" to='/media'><paragraph className="navbar-font" >ميديا
                                    </paragraph> <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item nvbar-right">
                                    <Link className="nav-link" to='/contact-us'><paragraph className="navbar-font" >اتصل بنا
                                    </paragraph> <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                            <ul className="nav nav-icons" >
                                <li  className="nav-item">
                                    <input className="searchdiv searchclass" ref="myTextInput" onFocus={()=>this.OnFocus()} onBlur={()=>this.OnBlur()} /*onFocus={()=>this.OnFocus()} onBlur={()=>this.OnBlur()}*/ type="search" placeholder="بحث" />
                                </li>
                                <li  className="nav-item search-icon">
                                    <Link className="nav-link" to="/SearchResults">
                                        <i className="icons fas fa-search fa-md"></i>
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>

                                <li className="nav-item naavitem">
                                    <a className="nav-link" href="#">
                                        <i className="icons fab fa-linkedin-in fa-md"></i>

                                        <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item naavitem">
                                    <a className="nav-link" href="#">
                                        <i className="icons fab fa-google-plus-g fa-md"></i>

                                        <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item naavitem">
                                    <a className="nav-link" href="#">
                                        <i className="icons fab fa-instagram fa-md"></i>

                                        <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item naavitem">
                                    <a className="nav-link" href="#">
                                        <i className="icons fab fa-twitter fa-md"></i>

                                        <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item naavitem">
                                    <a className="nav-link" href="#">
                                        <i className="icons fab fa-facebook fa-md"></i>

                                        <span className="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
    //For jquery method just uncomment search button code and comment
    handlefocus(){
        var el = findDOMNode(this.refs.myTextInput);
        console.log(el);
        $(el).removeClass("searchclass").addClass("searchclass2");


    };
    handleblur() {
        var el = findDOMNode(this.refs.myTextInput);
        console.log(el);
        $(el).removeClass("searchclass2").addClass("searchclass");

    };
    OnFocus(){
        var el = findDOMNode(this.refs.myTextInput);
        el.classList.remove("searchclass");
        el.classList.add("searchclass2")
    }
    OnBlur(){
        var el = findDOMNode(this.refs.myTextInput);
        el.classList.remove("searchclass2");
        el.classList.add("searchclass")
    }
}
export default Header;
