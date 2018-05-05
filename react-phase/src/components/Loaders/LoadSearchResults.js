import React, {Component} from 'react';
import SearchResultsItem from '../search-results/search-result-item'

class LoadSearchResults extends Component {
constructor(props)
{
  super(props);
}
render() {
  const arr = this.props.results.map((result) => {
		return(
			<SearchResultsItem
        key = {result.id}
        image = {result.image}
        title = {result.title}
        refrence_link = {result.link}
        refrence = {result.refrence}
        />
		);
	});
  return(
  		<div className="row">
          {arr}
  		</div>
  );
}
};

export default LoadSearchResults;
