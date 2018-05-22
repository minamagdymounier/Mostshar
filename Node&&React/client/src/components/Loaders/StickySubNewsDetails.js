import React, {Component} from 'react'
import SubNewsDetails from '../news-details/SubNewsDetails.js'

class StickySubNewsLoader extends Component {
  constructor(props)
  {
    super(props);
  }
    render() {
      const subNews = this.props.SubNews.map((sub) => {
    		return(
    			<SubNewsDetails
            key = {sub.id}
            image = {sub.image}
            title = {sub.title}
            refrence = {sub.refrence}
            refrence_link = {sub.refrence_link}
            />
    		);
    	});
        return (
          <div className="col-lg-3">
              {subNews}
      		</div>
        )
    }
}

export default StickySubNewsLoader;
