import React, {Component} from 'react';
import BioItem from '../mostshar-page-components/sBio.js';

class LoadBio extends Component {
constructor(props)
{
  super(props);
}
render() {
  const BioItems = this.props.Bios.map((bio) => {
		return(
			<BioItem
        key = {bio.id}
        title = {bio.title}
        content = {bio.content}
        link = {bio.link}
        more = {bio.more}
        />
		);
	});
  return(
  		<div className="row">
          {BioItems}
  		</div>
  );
}
};

export default LoadBio;
