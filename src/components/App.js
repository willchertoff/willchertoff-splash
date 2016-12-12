import React, { Component, PropTypes } from 'react';
import Nav from './Nav';
import Hero from './Hero';

const propTypes = {
};

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="nav-container">
          <Nav />
        </div>
        <div className="main-container">
          <Hero />
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
