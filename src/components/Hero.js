import React from 'react';
import Icon from './Icon';

const fullscreenStyles = {
  backgroundImage: `url('../images/noware.JPG')`, // eslint-disable-line
};

const Hero = () =>
  <section className="hero">
    <div className="background-image fullscreen" style={fullscreenStyles} />
    <div className="container v-align">
      <div className="row">
        <div className="small-12 text-center">
          <h1 className="uppercase large m8">
            <strong>Will </strong>
            Chertoff
          </h1>
          <h5>
            Web developer
          </h5>
        </div>
      </div>
    </div>
    <div className="align-bottom m24">
      <ul className="menu social-list">
        <li><Icon icon={'facebook'} /></li>
        <li><Icon icon={'instagram'} /></li>
        <li><Icon icon={'linkedIn'} /></li>
        <li><Icon icon={'github'} /></li>
      </ul>
    </div>
  </section>;

export default Hero;
