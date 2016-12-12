import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Spacer from './Spacer';

const App = () =>
  <div className="wrapper">
    <div className="nav-container">
      <Nav />
    </div>
    <div className="main-container">
      <Hero />
      <Spacer />
    </div>
  </div>;

export default App;
