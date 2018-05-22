import React from 'react'

const Qoutation_Item = (props) => {
  return(
    <div className={"carousel-item "+props.active}>
      <div className="d-block w-100 quotes-position">
        <i className="fas fa-quote-right qoutation_right"></i>
        <h2 className="qouts quots-parent">{props.content}</h2>
        <i className="fas fa-quote-left qoutation_left"></i>
        <small className="gold qouts-author">{props.author}</small>
      </div>
    </div>
  );
};

export default Qoutation_Item;
