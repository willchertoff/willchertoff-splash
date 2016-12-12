import React from 'react';

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
  </section>;

export default Hero;
