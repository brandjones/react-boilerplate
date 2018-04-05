import React from 'react';

const Title = 'An Elegant Website built for a General Contractor.';
const Subtitle = 'Project management at a glance.';
const Content = 'As the UX Designer and Front End Engineer, I was responsible for the IOS design and Android app design. In addition, I developed the website from the ground up with HTML, CSS, & Javascript.';


const BeginningContent = () => (
  <div className='desktop--flex'>
      <div className='flex beginning-content--five'>
        <h1> { Title } </h1>
        <h2>  { Subtitle } </h2>
        <p> { Content } </p>
      </div>
      <div className='flex beginning-content--seven desktop--seven'>
        <img className='img-fluid container jumbotron__image' src={`/images/2x.png`} />
      </div>
  </div>
);


export default BeginningContent;
