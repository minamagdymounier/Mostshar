import React, {Component} from 'react'
import BioItem from './sBio.js'
import InBetween from './inBetween.js'
import LoadBio from '../Loaders/LoadBioItems.js'
class Bio extends Component {
constructor(props)
{
  super(props);
  this.state = {
    bios : [
      {
        id      : 1,
        title   : "الدرجه العلميه",
        content : "إن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربة",
        more    : "المزيد",
        link : "/bio"
      },
      {
        id      : 2,
        title   : "الدرجه العلميه",
        content : "إن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربة",
        more    : "المزيد",
        link : "/bio"
      },
      {
        id      : 3,
        title   : "الدرجه العلميه",
        content : "إن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربة",
        more    : "المزيد",
        link : "/bio"
      },
      {
        id      : 4,
        title   : "الدرجه العلميه",
        content : "إن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا راقية قامت على العلم والمعرفة والتجربةإن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربة",
        more    : "المزيد",
        link : "/bio"
      }
    ]
  }
}

render() {
  return(
    <main className="bio-section">
  		<section className="container" dir="rtl" lang="ar">
        <InBetween title={this.props.title} link={this.props.link}/>
            <LoadBio Bios={this.state.bios}/>
      </section>
    </main>
  );
}
};

export default Bio;
