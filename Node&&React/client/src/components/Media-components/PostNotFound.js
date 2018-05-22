import React, {Component} from 'react'
class PostNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
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
        )
    }

}
export default PostNotFound