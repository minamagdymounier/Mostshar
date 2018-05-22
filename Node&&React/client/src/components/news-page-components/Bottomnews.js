import React, {Component} from 'react'
import Bottomnewspost from './Bottomnews-post'

class Bottomnews extends Component {
render() {
  const bottomnews_post = this.props.bottomnews_posts.map((post) => {
		return(
			<Bottomnewspost
			 key={post.id}
			 bottomnews_post={post} />
		);
	});
  return(
    <div className="bottom-news-section">
  	   <div className="container">
  			 <div className="row">
           {bottomnews_post}
  		   </div>
  	  </div>
    </div>
  );
}
};

export default Bottomnews;
