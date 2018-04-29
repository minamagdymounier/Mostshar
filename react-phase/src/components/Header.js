import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import '../css/bootstrap.min.css';
import '../css/media.css';
import '../css/navbar.css';

class Header extends Component{
    render(){
        return(
            <div className="nav-sectionlight">
                <div className="horz-header"></div>
                <nav  className="navbar navbar-expand-lg ">
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
                                    <input className="searchdiv searchclass" onFocus={()=>this.OnFocus()} onBlur={()=>this.OnBlur()} type="search" placeholder="بحث" />
                                </li>
                                <li  className="nav-item search-icon">
                                    <a className="nav-link" href="#">
                                        <i className="icons fas fa-search fa-md"></i>

                                        <span className="sr-only">(current)</span></a>
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
    OnFocus(){
        document.getElementsByClassName("searchdiv").item(0).classList.remove("searchclass");
        document.getElementsByClassName("searchdiv").item(0).classList.add("searchclass2")
    }
    OnBlur(){
        document.getElementsByClassName("searchdiv").item(0).classList.remove("searchclass2");
        document.getElementsByClassName("searchdiv").item(0).classList.add("searchclass")
    }
}
export default Header;
