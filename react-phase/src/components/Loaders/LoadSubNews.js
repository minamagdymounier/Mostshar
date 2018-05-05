import React, {Component} from 'react';
import SubNewsItem from '../mostshar-page-components/SubNewsItem.js'

class LoadSubNews extends Component {
constructor(props)
{
  super(props);
}
render() {
  const subNews = this.props.sNews.map((news) => {
		return(
			<SubNewsItem
        key = {news.id}
        image = {news.image}
        title = {news.title}
        refrence_link = {news.link}
        refrence = {news.refrence}
        />
		);
	});
  return(
  		<div className="row sub-news-row">
          {subNews}
  		</div>
  );
}
};

export default LoadSubNews;
