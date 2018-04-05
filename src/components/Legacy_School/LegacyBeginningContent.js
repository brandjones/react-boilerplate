import React from 'react';

const titleOfWhatIDid = <h1> Pay tuition, post on blog, on any screen size. </h1>;
const whatIDid = <p> I created a user friendly web application for the Legacy School of Performing Arts, a music and dance school that serves the general public. I served as the principal UI designer and Web Engineer. </p>;

const LegacyBeginningContent = () => (
  <div className='flex desktop--flex'>
    <div className='desktop--flex__legacy--four'>
      { titleOfWhatIDid }
      { whatIDid }
    </div>
    <div className='desktop--flex__legacy--eight'>
      <img className='img-fluid' src={`/images/legacydesktop.png`} />
    </div>
  </div>
);

export default LegacyBeginningContent;
