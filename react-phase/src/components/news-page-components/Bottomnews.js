import React, {Component} from 'react'
import Bottomnewspost from './Bottomnews-post'

class Bottomnews extends Component {
render() {
  let bottomnews_posts = this.props.bottomnews_posts.slice(3);
  if(bottomnews_posts.length != 0){
      bottomnews_posts = bottomnews_posts.slice(0,8);
  }
  else{
    return (
      <div className="bottom-news-section">
    	   <div className="container">
          <h1 style={{textAlign:'center'}}>لا يوجد اخبار الان </h1>
         </div>
      </div>
    );
  }
  const bottomnews_post = bottomnews_posts.map((post) => {
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
