import React, {Component} from 'react'
import MainNewsDetails from '../news-details/MainNewsDetails.js'

class MainNewsDetailsLoader extends Component {
  constructor(props)
  {
    super(props);
  }
    render() {
      const News = this.props.MainNews.map((sub) => {
    		return(
    			<MainNewsDetails
            key = {sub.id}
            image = {sub.image}
            title = {sub.title}
            content = {sub.content}
            date = {sub.date}
            />
    		);
    	});
        return (
          <div className="col-lg-7">
              {News}
      		</div>
        )
    }
}

export default MainNewsDetailsLoader;
