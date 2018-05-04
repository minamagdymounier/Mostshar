import React, {Component} from 'react'
import Topnews from './news-page-components/Topnews'
import Bottomnews from './news-page-components/Bottomnews'
import Qoutation from './shared/qoutation_slider.js'
import '../css/bootstrap.css'
import '../css/style.css'

class News extends Component{
  constructor(props){
		super(props);
		this.state = {
			topnews_posts : [
        {
          "id" : 1,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 2,
          "img" : "sliderimage2.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "date" : "5 يوليو 2018"
        },
        {
          "id" : 3,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "date" : "5 يوليو 2018"
        }
      ],
      bottomnews_posts : [
        {
          "id" : 1,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع"
        },
        {
          "id" : 2,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع"
        },
        {
          "id" : 3,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع"
        },
        {
          "id" : 4,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع"
        },
        {
          "id" : 5,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع"
        },
        {
          "id" : 6,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع"
        },
        {
          "id" : 7,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع"
        },
        {
          "id" : 8,
          "img" : "sliderimage1.png",
          "p" : "قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, و ليس اسلوب الإملاء",
          "link" : "اليوم السابع"
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
            <div>
                <Topnews  topnews_posts={this.state.topnews_posts}/>
                <Bottomnews  bottomnews_posts={this.state.bottomnews_posts}/>
                <Qoutation image={"human2.png"}/>
                <Bottomnews  bottomnews_posts={this.state.bottomnews_posts}/>
            </div>
        )
    }
    }
export default News;
