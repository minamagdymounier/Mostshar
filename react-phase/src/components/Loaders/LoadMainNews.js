import React, {Component} from 'react';
import MainNewsItem from '../mostshar-page-components/MainNewsItem.js';

class LoadMainNews extends Component {
constructor(props)
{
  super(props);
}
render() {
  return(
  		<div className="col-lg-6 mainNewItemParent">
        <MainNewsItem
          key = {this.props.mNews.id}
          image = {this.props.mNews.image}
          title = {this.props.mNews.title}
          content = {this.props.mNews.content}
          refrence_link = {this.props.mNews.link}
          refrence = {this.props.mNews.refrence}
          />
  		</div>
  );
}
};

export default LoadMainNews;
