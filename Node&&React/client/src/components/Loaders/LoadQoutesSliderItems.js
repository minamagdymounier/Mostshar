import React, {Component} from 'react';
import Qoutation_Item from '../shared/qoutation_slider_item.js'

class LoadItems extends Component {
  constructor(props)
  {
    super(props);
  }
  render(){
  const qoutes = this.props.qoutes.map((qoute) => {
		return(
			<Qoutation_Item
       key = {qoute.id}
			 active={qoute.active}
			 author={qoute.author}
       content = {qoute.content}/>
		);
	});
  return(
    <div className="carousel-inner">
      {qoutes}
    </div>
  );
}
}

export default LoadItems;
