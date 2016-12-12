import React from 'react';
import { Link } from 'react-router';

const Nav = () =>
  <nav>
    <div className="nav-bar">
      <div className="module left">
        <h2 className="uppercase">Chertoff</h2>
      </div>
      <div className="module right">
        <ul className="menu">
          <li><Link to="//instagram.com/behind_your_eye">photo</Link></li>
          <li><Link to="//instagram.com/behind_your_eye">vsco</Link></li>
          <li><Link to="//instagram.com/behind_your_eye">instagram</Link></li>
          <li><Link to="//instagram.com/behind_your_eye">linkedIn</Link></li>
          <li><Link to="//instagram.com/behind_your_eye">github</Link></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;
