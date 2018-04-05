import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = ({match}) => {
  return (
    <div className=''>
      <div className='link-container'>
          { console.log(match) }
          {/* <Link to='/'> Previous </Link> */}
          <Link to='/'> Home </Link>
          {/* <Link to='/'> Next </Link> */}
      </div>
    </div>
  );
};



export default NavigationBar;
