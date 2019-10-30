import React from 'react';
import PropTypes from 'prop-types';

import './Filter.css';

Filter.propTypes = {
  filterHandler: PropTypes.func
};

function Filter(props) {
  return (
    <div className="filter">
      <select
        className="filter__select"
        onChange={(e) => props.filterHandler(e.target.value)}
      >
        <option value="0">Visa alla</option>
        <option value="200">Pris 200 kr - 300 kr</option>
        <option value="300">Pris 300 kr - 400 kr</option>
        <option value="400">Pris 400 kr - 500 kr</option>
      </select>
    </div>
  );
}

export default Filter;
