import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Stars from '../extra/Stars';
import background from '../../../assets/images/image.png'
import heart from '../../../assets/icons/heart.png'
import arrowBack from '../../../assets/icons/arrow-2.png'
import './SalongHeader.css';


SalongHeader.propTypes = {
  salong: PropTypes.object
};

function SalongHeader(props) {
  let input = props.salong[0] || [];
  const { stars, name } = input;

  return (
    <div className="header">

      <div className="header__image">
        <img
          alt="salong"
          src={background}>
        </img>
      </div>

      <div>
        <Link to="/">
          <img
            alt="back"
            className="header__back link"
            src={arrowBack}
          ></img>
        </Link>
      </div>

      <img
        className="header__heart link"
        alt="heart"
        src={heart}>
      </img>

      <div className="header__image__info">
        <h2 className="header__title">{name}</h2>
        <Stars stars={stars}/>
      </div>

    </div>
  );
}

export default SalongHeader;
