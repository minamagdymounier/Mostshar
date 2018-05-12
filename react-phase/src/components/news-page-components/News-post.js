import React, {Component} from 'react'
import NotFound from '../NotFound'

class NewsPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:parseInt(props.match.params.number, 10),
            post:[
            {
              "id" : 1,
              "img" : "sliderimage1.png",
              "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاءقال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاءقال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
              "link" : "اليوم السابع",
              "date" : "5 يوليو 2018"
            },
            {
              "id" : 2,
              "img" : "sliderimage2.png",
              "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاءقال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاءقال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
              "link" : "اليوم السابع",
              "date" : "5 يوليو 2018"
            }
          ]
        };
    }

    render() {
      let post = {};
      if(this.state.id==1){
        post = this.state.post[0];
      }
      else if(this.state.id==2){
        post = this.state.post[1];
      }
      else{
        return <NotFound />
      }
        return (
            <div className="container news-post">
              <div className="row news-post-row">
                  <div className="col-sm-6 news-post-half">
                       <img className="imgs" src={require("../../images/"+post.img)} alt={"Topnews"} />
                  </div>
                  <div className="col-sm-6 news-post-half">
                      <div className="news-post-content">
                        <p>
                           {post.p}
                           {post.p}
                           {post.p}
                           {post.p}
                           {post.p}
                           {post.p}
                        </p>
                        <small className="date"> {post.date} </small>
                      </div>
                  </div>
               </div>
            </div>
        )
    }
}



export default NewsPost
