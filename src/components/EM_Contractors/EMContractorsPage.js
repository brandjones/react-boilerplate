import React from 'react';
import NavigationBar from '../NavigationBar';
import BeginningContent from './BeginningContent';
import BottomContent from './BottomContent';
import MiddleContent from './MiddleContent';
import { Link } from 'react-router-dom';

const MiddleContentTitle = <h1> What makes for an awesome user experience? </h1>;
const BottomContentTitle = <h1 className='middle-content__content'> UI Design <span> + </span> Functional Code <span> + </span> Product Goals <span> = </span> User Experience  </h1>

const EMContractorsPage = () =>  (
  <div>
    <div>
      <div className='jumbotron'>
        <NavigationBar />
        <BeginningContent />
      </div>
    </div>
      <div className='middle-content'>
          <div className='middle-content__content flex'>
            { MiddleContentTitle }
          </div>
          <div className=''>
            <MiddleContent />
          </div>
          <hr />
          <div className='bottom-content flex'>
            <div className='flex bottom-content__title'>
              { BottomContentTitle }
            </div>
            <BottomContent />
          </div>
      </div>
      <div className=''>
        <NavigationBar />
      </div>
  </div>
);


export default EMContractorsPage;
