import React from 'react';


const titleOfProject = <h1> Legacy School of Performing Arts </h1>;
const synopsisOfProject = <h2> Responsive web checkout experience </h2>;

const LegacyTitleContent = () => (
  <div>
    <div className='center legacy__title'>
    { titleOfProject }
    { synopsisOfProject }
    </div>
  </div>
);

export default LegacyTitleContent;
