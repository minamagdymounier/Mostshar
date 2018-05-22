import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../css/bootstrap.min.css';

import '../css/mostshar-page-style.css';
class Footer extends Component {
    render() {
      const path = window.location.pathname.slice(1);
      if(path == "404"){          // If the path is wrong go to 404 page and dont render the Footer
        return null;
      }
        return (
            <main className="footer container-fluid">
                <section className="container">
                    <div className="row">
                        <div className="col-lg-3 footer-logo-parent">
                            <div style={{width: "100%"}}>
                                <img src={require('../images/footer/logo.png')} className="footer-logo"/></div>
                        </div>
                        <div className="col-lg-9  rtl">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 footer-sub-menu">
                                    <h4 className="gold">تواصل معنا</h4>

                                    <form className="">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <button
                                                    className="btn btn-outline-secondary light-grey fas fa-long-arrow-alt-left"
                                                    style={{fontSize: 17}} type="button"></button>
                                            </div>
                                            <input type="text" className="form-control sign-up rtl"
                                                   placeholder="اشترك معنا" aria-label=""
                                                   aria-describedby="basic-addon1"/>
                                        </div>
                                    </form>

                                </div>
                                <div className="col-md-3 col-sm-6 footer-sub-menu">
                                    <h4 className="gold">وسائط</h4>
                                    <a href="#" className="footer-media">صور</a>
                                    <a href="#" className="footer-media">فيديوهات</a>
                                </div>
                                <div className="col-md-3 col-sm-6 footer-sub-menu">
                                    <h4 className="gold">أخبار</h4>
                                    <a href="#" className="footer-news">آخر الأخبار</a>
                                    <a href="#" className="footer-news">مقابلات مع الإمام</a>
                                    <a href="#" className="footer-news">مؤتمرات الأزهر</a>

                                </div>
                                <div className="col-md-3 col-sm-6 footer-sub-menu">
                                    <h4 className="gold">السيره الذاتيه </h4>
                                    <a href="#" className="footer-bio">مولده وتعليمه</a>
                                    <a href="#" className="footer-bio">الدرجة العلمية</a>
                                    <a href="#" className="footer-bio">حياته قبل الأزهر</a>
                                    <a href="#" className="footer-bio">حياته في الأزهر</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
export default Footer;
