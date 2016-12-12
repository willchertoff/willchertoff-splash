import React from 'react';
import Nav from './Nav';
import Hero from './Hero';

const App = () =>
  <div className="wrapper">
    <div className="nav-container">
      <Nav />
    </div>
    <div className="main-container">
      <Hero />
    </div>
  </div>;

export default App;
