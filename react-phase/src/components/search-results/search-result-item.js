import React from 'react'

const SearchResultsItem = (props) => {
        return (
          <div className="col-lg-3 col-md-6">
          <div className="card sub-news-card-p">
            <img className="card-img-top"  src={require("../../images/"+props.image)} alt="Card image cap"></img>
            <div className="card-body">
              <p className="card-text sub-news-title gold">{props.title}</p>
            </div>
            <div className="row search-results-social-footer">
              <div className="col-6">
                <span className="sNewsSocial">
                  <i className="fab fa-twitter cursor-pointer-link dark-grey"></i>
                </span>
                <span className="sNewsSocial">
                  <i className="fab fa-facebook-f cursor-pointer-link dark-grey"></i>
                </span>
              </div>
              <div className="col-6 text-center">
                <a href={props.refrence_link}>
                  <small className="bold gold cursor-pointer-link border">{props.refrence}</small>
                </a>
              </div>
            </div>
         </div>
       </div>
  );
}

export default SearchResultsItem;
