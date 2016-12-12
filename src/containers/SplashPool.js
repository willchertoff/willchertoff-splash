import React, { Component } from 'react';
import Masonry from 'react-masonry-component';


const swimmers = [
  { key: 0, name: 'Will Chertoff | Photos', image: 'willphoto', categories: ['all', 'web', 'photo'] },
  { key: 1, name: 'Dream Date', image: 'ddh', categories: ['all', 'web', 'design'] },
  { key: 2, name: 'The Exchange', image: 'ex', categories: ['all', 'web', 'photo', 'sound'] },
  { key: 3, name: 'Tammy for The Great Discontent', image: 'tami', categories: ['all', 'photo'] },
  { key: 4, name: 'TedX Mt. Hood', image: 'david', categories: ['all', 'photo'] },
];

const masonryOptions = {
  itemSelector: '.swimmer',
  percentPosition: true,
};

class SplashPool extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 'all',
    };
  }

  onClick = (e) => {
    e.preventDefault();
    const filter = e.target.getAttribute('data-filter');
    this.setState({
      category: filter,
    });
  }
  byCategory = swimmer =>
    swimmer.categories.includes(this.state.category);

  mItems = () =>
    swimmers.filter(this.byCategory).map(swimmer =>
      <div key={swimmer.key} className="swimmer">
        <img src={`/images/${swimmer.image}.JPG`} alt={swimmer.name} />
        <div className="lower">
          <h6>{swimmer.name}</h6>
          <h7>{swimmer.categories.map(cat => <span key={cat}>{cat} </span>)}</h7>
        </div>
      </div>
    );

  render() {
    return (
      <section className="splash-pool">
        <div className="filter">
          <ul className="filter-list">
            {/* eslint-disable jsx-a11y/no-static-element-interactions */}
            <li data-filter="all" onClick={this.onClick} className={this.state.category === 'all' ? 'active' : 'inactive'} >All</li>
            <li data-filter="web" onClick={this.onClick} className={this.state.category === 'web' ? 'active' : 'inactive'}>Web</li>
            <li data-filter="photo" onClick={this.onClick} className={this.state.category === 'photo' ? 'active' : 'inactive'}>Photo</li>
            <li data-filter="sound" onClick={this.onClick} className={this.state.category === 'sound' ? 'active' : 'inactive'}>Sound</li>
          </ul>
          {/* eslint-enable jsx-a11y/no-static-element-interactions */}
        </div>
        <Masonry
          className={'splash-pool-gallery'}
          options={masonryOptions}
        >
          {this.mItems()}
        </Masonry>
      </section>
    );
  }
}

export default SplashPool;
