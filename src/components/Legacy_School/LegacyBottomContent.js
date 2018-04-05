import React from 'react';

const developmentLifecycle = <h1 className='center'> Software Development Lifecycle in Practice </h1>;
const stripePayment = <h1 className='center'> Stripe API Integration </h1>;
const toLiveProject = (
  <a class='link-go' href='https://legacy-school.herokuapp.com/'> View Live Project </a>
);

const LegacyBottomContent = () =>(
  <div>
      <div>
          { developmentLifecycle }
      </div>
      <div>
        <img className='img-fluid' src={`/images/sdlc.png`}  />
      </div>
      <div>
          { stripePayment }
      </div>
      <div className='legacy-img-container'>
        <img className='img-fluid img-fluid--legacy' src={`/images/stripeleg.png`} />
        { toLiveProject }
      </div>
  </div>
);

export default LegacyBottomContent;
