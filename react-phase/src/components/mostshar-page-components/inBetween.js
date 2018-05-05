import React from 'react'
import { Link } from 'react-router-dom'

const InBetween = (props) => {
  return(
			<div className="row inBetween" dir="rtl">
				<div className="col-lg-3 col-md-12 align-vertically rtl flex-outer align-vertically-left">
					<img src={require("../../images/"+props.title)} alt=""></img>
				</div>
				<div className="col-lg-7 col-md-12 line">

				</div>
				<div className="col-lg-2 col-md-12 align-vertically ltr flex-outer align-vertically-right">
					<small>
						<Link to={props.link}>
							الانتقال للصفحه
						</Link>
					</small>
				</div>
			</div>
  );
};

export default InBetween;
