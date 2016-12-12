import React from 'react';

const Nav = () =>
  <nav>
    <div className="nav-bar">
      <div className="module left">
        <h2 className="uppercase">Chertoff</h2>
      </div>
      <div className="module right">
        <ul className="menu">
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.willchertoff.photos">photo</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.vsco.co/willchertoff/images/1">vsco</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/behind_your_eye">instagram</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/will-chertoff">linkedIn</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/willchertoff">github</a></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;
