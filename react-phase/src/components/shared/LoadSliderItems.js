import React from 'react'
import Qoutation_Item from './qoutation_slider_item.js'

const LoadItems = (props) => {
  const qoutes = props.qoutes.map((qoute) => {
		return(
			<Qoutation_Item
       id = {qoute.id}
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
};

export default LoadItems;
