import React, { Component } from 'react';
import Masonry from 'react-masonry-component';


const swimmers = [
  { key: 0, name: 'Will Chertoff | Photos', image: 'will', categories: ['all', 'web', 'photo'] },
  { key: 1, name: 'Dream Date', image: 'noware', categories: ['all', 'web', 'design'] },
  { key: 2, name: 'The Exchange', image: 'will', categories: ['all', 'web', 'photo', 'sound'] },
  { key: 3, name: 'Tammy for The Great Discontent', image: 'will', categories: ['all', 'photo'] },
  { key: 4, name: 'Tammy for The Great Discontent', image: 'will', categories: ['all', 'photo'] },
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
  byCategory = swimmer =>
    swimmer.categories.includes(this.state.category);

  mItems = () =>
    swimmers.filter(this.byCategory).map(swimmer =>
      <div key={swimmer.key} className="swimmer">
        <img src={`/images/${swimmer.image}.JPG`} alt={swimmer.name} />
        <div className="lower">
          <h6>{swimmer.name}</h6>
          <h7>{swimmer.categories.map(cat => <span>{cat}</span>)}</h7>
        </div>
      </div>
    );

  render() {
    return (
      <section className="splash-pool">
        <div className="filter" />
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
