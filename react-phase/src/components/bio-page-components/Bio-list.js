import React, {Component} from 'react'
import Biocontent from './Bio-content'

class Biolist extends Component {
render() {
  const bio_list = this.props.bio_list.map((bio) => {
		return(
			<Biocontent
			 key={bio.id}
			 bio={bio} />
		);
	});
  return(
    <div className="biography" style={{marginTop: "5vh",marginBottom: "5vh"}}>
      <div className="container content">

        <div className="row bio-header" dir="rtl">
          <div className="col-md-3 col-xs-12">
            <img src={require("../../images/title-bio.png")} alt={"BioTitle"} />
          </div>
          <div className="col-md-7 col-xs-12">
            <hr />
          </div>
        </div>

        {bio_list}

      </div>
    </div>
  );
}
};

export default Biolist;
