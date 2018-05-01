import React from 'react'

const Header = () => {
  return(
    <header className="main-page-header container-fluid">
  		<section className="container">
    			<div className="row">
      				<div className="col-lg-6 ">
      					<img src={require('../../images/slider/Human.png')} alt="" className="header-mostshar-img"></img>
      				</div>
      				<div class="col-lg-6">
      					<img src={require('../../images/slider/Logo.png')} alt="" className="header-logo-img"></img>
      					<img src={require('../../images/slider/phrase.png')} alt="" className="header-slogn-img"></img>
      				</div>
      			</div>
  		</section>
	</header>
  );
};

export default Header;
