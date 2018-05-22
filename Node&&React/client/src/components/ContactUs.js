import React, {Component} from 'react'
import '../css/contactUs.css';
class ContactUs extends Component {
    render() {
        return (
            <section style={{backgroundColor:"#ececec"}}>
                <div className="container contactsectionlight" style={{paddingBottom:32}}>
                    <div className="row etsl-bna-section">
                        <div  className="col-lg-10 d-none d-lg-block lineshape">
                            <div className="container">
                                <img className="img-fluid" style={{maxWidth: "100%",maxHeight: "100%"}} src={require('../images/Shape 1.png')} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 etsl-bna-img">
                            <div className="container">
                                <img src={require('../images/contact.png')} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="container">
                                <div className="contact-us-contact-info">
                                    <p className="lg-font" dir="rtl">تواصل معنا
                                    </p>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <input type="text" dir="rtl" className="form-control" id="exampleFormControlInput1" placeholder="الإسم" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" dir="rtl" className="form-control" id="exampleFormControlInput2" placeholder="البريد الإلكتروني" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" dir="rtl" id="exampleFormControlTextarea1" rows="4" placeholder="الرسالة"></textarea>
                                    </div>
                                    <div className="container">
                                        <button type="submit" className=" btn btn-primary"><p dir="rtl" className="send-btn">إرسال</p></button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="container contact-info-section">

                                <div className="contact-us-contact-info">
                                    <p className="lg-font" dir="rtl">بيانات الإتصال
                                    </p>
                                </div>
                                <div className="headers">
                                    <p className="sm-brown-font" dir="rtl">البريد الإلكتروني:
                                    </p>
                                </div>
                                <div className="bodies">
                                    <p className="sm-grey-font" dir="rtl">el_azhar@mail.com
                                    </p>
                                </div>
                                <div className="headers">
                                    <p className="sm-brown-font" dir="rtl">العنوان:
                                    </p>
                                </div>
                                <div className="bodies">
                                    <p className="sm-grey-font" dir="rtl">الدور السادس - مبنى مشيخه الازهر - بجوار الحديقه - القاهرة
                                    </p>
                                </div>
                                <div className="headers">
                                    <p className="sm-brown-font" dir="rtl">تليفون:
                                    </p>
                                </div>
                                <div className="bodies">
                                    <p className="sm-grey-font" dir="rtl">29222222 - 29333333
                                    </p>
                                </div>
                                <div className="headers">
                                    <p className="sm-brown-font" dir="rtl">الموقع:
                                    </p>
                                </div>
                                <div className="bodies">
                                    <p className="sm-grey-font" dir="rtl">www.alemamalakbar.eg
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col d-none d-lg-block">

                        </div>
                        <div className="col-lg-3 col-md-12">

                            <div className="contact-us-contact-info2">
                                <p className="lg-font" dir="rtl">موقعنا
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="map">
                                <img src={require('../images/Al Azhar Mosque   Google Maps.png')} style={{maxWidth: "100%",maxHeight: "100%"}} className="img-fluid" />
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        )
    }
}

export default ContactUs;
