import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ListItem.css';
import Stars from '../extra/Stars';
import arrowForward from '../../../assets/icons/arrow_forward.png';

Stars.propTypes = {
  salong: PropTypes.object
};

function ListItem(props) {
  const { id, name, adress, price, stars } = props.salong;

  return (
    <article className="listItem">

      <div className="listItem__section ">
        <p className="listItem__section__time">
          12.00
        </p>
      </div>

      <div className="listItem__section ">
        <h3 className="listItem__section__header">
          {name}
        </h3>
        <div className="listItem__section__stars">
          <Stars stars={stars}/>
          <span className="listItem__section__span">
            (32)
          </span>
        </div>
        <p className="listItem__section__adress">
          {adress}
        </p>
      </div>

      <div className="listItem__section">
        <p className="listItem__section__price">
          {price} kr
        </p>
        <span className="listItem__section__span">
          30 min
        </span>
      </div>

      <div className="listItem__section">
        <Link to={"salong/" + id}>
          <img
            alt="forward"
            className="listItem__section__icon"
            src={arrowForward}
          ></img>
        </Link>
      </div>

    </article>
  );
}

export default ListItem;
