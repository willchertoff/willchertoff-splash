import React from 'react';
import { Link } from 'react-router';

const fullscreenStyles = {
  backgroundImage: `url('../images/noware.JPG')`,
}

const Hero = () =>
  <section className="hero">
    <div className="background-image fullscreen" style={fullscreenStyles}>
    </div>
    <div className="container v-align">
      <div className="row">
        <div className="small-12 text-center">
          <h1 className="uppercase large">
            <strong>Will</strong>
            Chertoff
          </h1>
          <h5>
            American Web developer
          </h5>
        </div>
      </div>
    </div>
  </section>

export default Hero;