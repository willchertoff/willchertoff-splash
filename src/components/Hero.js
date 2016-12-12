import React from 'react';
import Icon from './Icon';

const fullscreenStyles = {
  backgroundImage: `url('../images/will.JPG')`, // eslint-disable-line
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
        <li><a href="https://www.facebook.com/will.chertoff" rel="noopener noreferrer" target="_blank"><Icon icon={'facebook'} /></a></li>
        <li><a href="https://www.instagram.com/behind_your_eye" rel="noopener noreferrer" target="_blank"><Icon icon={'instagram'} /></a></li>
        <li><a href="https://www.linkedin.com/in/will-chertoff" rel="noopener noreferrer" target="_blank"><Icon icon={'linkedIn'} /></a></li>
        <li><a href="https://www.github.com/willchertoff" rel="noopener noreferrer" ><Icon icon={'github'} /></a></li>
      </ul>
    </div>
  </section>;

export default Hero;
