import React from 'react';
import { Link } from 'react-router-dom';
import LegacyTitleContent from './LegacyTitleContent';
import LegacyBeginningContent from './LegacyBeginningContent';
import LegacyBottomContent from './LegacyBottomContent';

import NavigationBar from '../NavigationBar';


const LegacyPage = () => (
  <div>
    <NavigationBar />
    <LegacyTitleContent />
    <LegacyBeginningContent />
    <LegacyBottomContent />
  </div>
);


export default LegacyPage;
