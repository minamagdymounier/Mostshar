import React, {Component} from 'react'
import InBetween from './inBetween.js'
import LoadMainNews from '../Loaders/LoadMainNews.js'
import LoadSubNews from '../Loaders/LoadSubNews.js'


class News extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      mainNews :
        {
          id : 1,
          image:"main-news.png",
          title : "قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال ",
          content : "قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال ",
          refrence : "اليوم السابع",
          refrence_link : "#"
        }
      ,
      subNews : [
        {
          id : 1,
          image:"main-news.png",
          title : "قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال ",
          refrence : "اليوم السابع",
          refrence_link : "#"
        },
        {
          id : 2,
          image:"main-news.png",
          title : "قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال ",
          refrence : "اليوم السابع",
          refrence_link : "#"
        },
        {
          id : 3,
          image:"main-news.png",
          title : "قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال ",
          refrence : "اليوم السابع",
          refrence_link : "#"
        },
        {
          id : 4,
          image:"main-news.png",
          title : "قال فضيله الامام الاكبر : ان القرأن الكريم استعمل منذ البدايه اسلوب الحوارقال ",
          refrence : "اليوم السابع",
          refrence_link : "#"
        }
      ]
    }
  }
render() {
  return(
    <main className="new-section">
  		<section className="container">
          <InBetween title={this.props.title} link={this.props.link}/>
          <div className="row">
              <LoadMainNews mNews={this.state.mainNews}/>

              <div className="col-lg-6">
                    <LoadSubNews sNews={this.state.subNews} />
              </div>
          </div>
      </section>
  </main>
  );
}
};

export default News;
