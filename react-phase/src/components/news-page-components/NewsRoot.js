import React, {Component} from 'react'
import Topnews from './Topnews'
import Bottomnews from './Bottomnews'
import Qoutation from './../shared/qoutation_slider.js'
import '../../css/bootstrap.css'
import '../../css/style.css'

class NewsRoot extends Component{
  constructor(props){
		super(props);
		this.state = {
      news_posts : [
        {
          "id" : 1,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 2,
          "img" : "sliderimage2.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 3,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 4,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 5,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 6,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 7,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 8,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 9,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 10,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 11,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع",
          "date" : "5 يوليو 2018"
        }


      ]
		};
	}

    getNewsByNumber(arr,n){     // to determine how much news_posts should we show (will use it later)
      return arr.slice(0,n);
    }
    render() {
      //this.setState({bottomnews_posts:this.getNewsByNumber(this.state.bottomnews_posts,2)});
        return (
            <div className="news-body">
                <Topnews  topnews_posts={this.state.news_posts}/>
                <Bottomnews  bottomnews_posts={this.state.news_posts}/>
                <Qoutation image={"human2.png"}/>
                <Bottomnews  bottomnews_posts={this.state.news_posts}/>
            </div>
        )
    }
    }
export default NewsRoot;
