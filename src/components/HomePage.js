import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const HomePage = () => (
  <div>
    <div className='container intro-container'>
      <h2> Hello, I'm Brandon Jones. </h2>
      <p> I'm a Web Developer, working on cool projects. </p>
      <p> Always open to talk. </p>
      <a href='https://github.com/brandjones'> Github </a>


      {/* <Link to='/resume'> resume </Link> */}
      {/* <Link to='/linkedin'> linkedin </Link> */}
    </div>

    <div className='row container home-wrapper'>
        <div className='six columns'>
          <Link to='/emcontractors'>
            <img className='img-fluid' src={`/images/plus.png`} />
          </Link>
        </div>
        <div className='six columns'>
          <Link to='/legacy'>
            <img className='img-fluid' src={`/images/chalk.png`} />
          </Link>
        </div>
    </div>
  </div>


);

export default HomePage;
