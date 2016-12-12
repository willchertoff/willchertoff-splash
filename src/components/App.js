import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Spacer from './Spacer';
import SplashPool from '../containers/SplashPool';

const App = () =>
  <div className="wrapper">
    <div className="nav-container">
      <Nav />
    </div>
    <div className="main-container">
      <Hero />
      <Spacer />
      <SplashPool />
    </div>
  </div>;

export default App;
