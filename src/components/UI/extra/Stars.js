import React from 'react';
import PropTypes from 'prop-types';

import starEmpty from '../../../assets/icons/star-2.png'
import starFull from '../../../assets/icons/star.png'
import './Stars.css';

Stars.propTypes = {
  stars: PropTypes.string
};

function Stars(props) {
  
  function renderStars(amount) {
    let stars = [];
    for(let i = 0; i < amount; i++) {
      stars.push(<img className="star" src={starFull} alt="star full"></img>);
    }
    for(let i = 0; i < (5-amount); i++) {
      stars.push(<img className="star" src={starEmpty} alt="star full"></img>);
    }
    return stars;
  }

  return (
    <div className="salong">
      {renderStars(Number(props.stars))}
    </div>
  );
}

export default Stars;
