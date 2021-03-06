import React, {Component} from 'react'
import Topnewspost from './Topnews-post'

class Topnews extends Component {
render() {
  const topnews_post = this.props.topnews_posts.map((post) => {
		return(
			<Topnewspost
			 key={post.id}
			 topnews_post={post} />
		);
	});
  return(
    <div className="container-fluid top-news-container" style={{marginTop: "12vh"}}>
  		<div className="row">
          {topnews_post}
  		</div>
  	</div>
  );
}
};

export default Topnews;
