import React from 'react'
import BioItem from './sBio.js'
import InBetween from './inBetween.js'

const Bio = (props) => {
  return(
    <main className="bio-section">
  		<section className="container" dir="rtl" lang="ar">
        <InBetween title={props.title}/>
        <div className="row">
          <BioItem/>
          <BioItem/>
          <BioItem/>
          <BioItem/>
        </div>
      </section>
    </main>
  );
};

export default Bio;
