import React from 'react';
import arrowBack from '../../../assets/icons/arrow_back.png'
import filter from '../../../assets/icons/filter.png'
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation__filter">
      <img
        className="navigation__icon"
        alt="back"
        src={arrowBack}>
      </img>

      <h2>Hår</h2>

      <img
        className="navigation__icon"
        alt="filter"
        src={filter}>
      </img>
    </nav>
  );
}

export default Navigation;
