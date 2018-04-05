import React from 'react';

const UIDesign = <h2> 1. UI Design </h2>;
const DesignBrief = <p> Each web & mobile application should be founded on proven design principles to achieve the desired user experience. For me these proven design principles are based on two core ideas. </p>;
const ResponsiveDesign = <p> <strong> Responsive design </strong> means focusing on the application being readily available on any operating system. Casting a net on a wide variety of browsers and user screen sizes is a must. </p>;
const SimplisticDesign = <p> <strong> Simplistic design </strong> means simple flows. Simple is elegant and users should'nt overthink the flow of your website. </p>;

const FunctionalCode = <h2> 2. Functional Code </h2>;
const FunctionalBrief = <p> There are stuctures to our everyday life and writing code is no different. Patterns must be followed or one may run the risk of running an error prone web application. Who wants that? </p>;
const ModularCode  = <p> <strong> Modular code </strong> means making peices of code rather than a clunk of sphaghetti code. </p>;
const LessCode = <p> <strong> Less code </strong> is better. Not more. The less code the snappier. </p>;

const ProductGoals = <h2> 3. Product Goals </h2>;
const ProductGoalsBrief = <p> I need to consider the goals of the client while keeping flexibility in mind. Are we looking to create engagement? Drive more sales? Or, is it about impressions? </p>;
const Focus = <p> <strong> Focus </strong> on the design goals of the client and build on those same prinicples.</p>;
const Objectives = <p> <strong> Objectives </strong> are the cornerstone of the web application. You can't meet your product goals without a proper planning and a vision. </p>;

const MiddleContent = () => (
  <div className='desktop--flex'>
    <div className=''>
      <div className='middle-content__experience flex'>
          { UIDesign }
          { DesignBrief }
          { ResponsiveDesign }
          { SimplisticDesign }
      </div>
  </div>
  <div className=''>
    <div className='middle-content__experience flex'>
        { FunctionalCode }
        { FunctionalBrief }
        { ModularCode }
        { LessCode }
    </div>
  </div>
  <div className=''>
    <div className='middle-content__experience flex'>
        { ProductGoals }
        { ProductGoalsBrief }
        { Focus }
        { Objectives }
    </div>
  </div>
</div>
);

export default MiddleContent;
