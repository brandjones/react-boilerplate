import React from 'react';
import axios from 'axios';

const Title = <h1> Want To View it On a Tablet? </h1>;
const MobileView = <p> If you're on the go and need to check out the web application, simply grab your favorite tablet and you have a responsively designed website. </p>;
const Responsive = <p> The design solves compatibility issues across varying browsers and different device sizes. </p>;
const toLiveProject = (
  <a href='https://floating-oasis-25772.herokuapp.com/'> View Live Project </a>
);

const BottomContent = () => (
  <div className='bottom-content--wrapper flex desktop--flex'>
    <div className='bottom-content--five flex'>
        <img className='img-fluid' src={`/images/tab.png`} />
    </div>
    <div className='bottom-content--seven flex'>
        { Title }
        { MobileView }
        { Responsive }
        { toLiveProject }
    </div>
  </div>
);

export default BottomContent;
