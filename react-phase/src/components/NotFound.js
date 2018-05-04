import React, {Component} from 'react'
import '../css/bootstrap.css'
import '../css/404.css'

class NotFound extends Component{
    render() {
        return (
          <div>
          <div className="horz-header"></div>
          <section className="navbar-section">
            <nav  className="navbar navbar-expand-lg">
              <div dir="rtl" className="container">
                <a className="navbar-brand" href="../index.html">
                  <img src={require("../images/MAbdElsalam.png")} alt={"MAbdElsalam"} />
                </a>
                <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse mynavbar" id="navbarNavDropdown" >

                  <ul className="nav" style={{paddingTop: "20px",paddingRight:"14vw",marginRight: "auto"}}>
                    <li className="nav-item naavitem nv-search">
                      <form className="form-inline">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <a className="input-group-text search-icon" id="basic-addon1" href="#"><i className="icons fas fa-search icon-color-1"></i></a>
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



              <div className="section-404">
                <div className="container error-container">
                  <h1 className="error-h error-header">404</h1>
                  <div className="error-p">
                    <p className="error-p-title">الصفحة غير موجودة</p>
                    <small dir="rtl" className="error-p-description">عذرا , و لكن الصفحة التى كنت تبحث عنها لم يتم العثور عليها حاول التحقق من URL للخطأ , قم اضغط على زر التحديث فى المتصفح الخاص بك او حاول العثور على شئ اخر فى موقعنا.</small>
                  </div>
                  <h6 className="error-h error-footer">الرجوع الى الصفحة الرئيسية</h6>

                </div>
              </div>
            </div>
        );
    }
    }
export default NotFound;
