import React from 'react'

const InBetween = (props) => {
  return(
			<div className="row inBetween">
				<div className="col-lg-3 col-md-12 align-vertically rtl flex-outer align-vertically-left">
					<img src={require("../../images/"+props.title)}></img>
				</div>
				<div className="col-lg-7 col-md-12 line">

				</div>
				<div className="col-lg-2 col-md-12 align-vertically ltr flex-outer align-vertically-right">
					<small>
						<a href="">
							الانتقال للصفحه
						</a>
					</small>
				</div>
			</div>
  );
};

export default InBetween;
