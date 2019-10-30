import React from 'react';
import PropTypes from 'prop-types';
import './SalongInfo.css';
import pin_icon from '../../../assets/icons/pin.png';
import clock_icon from '../../../assets/icons/clock.png';
import phone_icon from '../../../assets/icons/phone.png';
import globe_icon from '../../../assets/icons/globe.png';
import arrow_down_icon from '../../../assets/icons/arrow_down.png';

SalongInfo.propTypes = {
  salong: PropTypes.object
};

function SalongInfo(props) {
  let input = props.salong[0] || [];
  const { adress, post, city, phone, time, webpage, info } = input;

  return (
    <div className="info">
      <div className="info__row">
        <img className="info__row__icon" src={pin_icon} alt="pin"></img>
        <p className="info__row__text">{adress}, {post} {city}</p>
      </div>

      <div className="info__row">
        <img
          className="info__row__icon"
          src={clock_icon}
          alt="clock">
        </img>
        <p className="info__row__text">{time}</p>
        <img
          className="info__row__icon arrow"
          src={arrow_down_icon}
          alt="arrow down">
        </img>
      </div>

      <div className="info__row">
        <img
          className="info__row__icon"
          src={phone_icon}
          alt="phone">
        </img>
        <p className="info__row__text">{phone}</p>
      </div>

      <div className="info__row">
        <img
          className="info__row__icon"
          src={globe_icon}
          alt="globe">
        </img>
        <p className="info__row__text">{webpage}</p>
      </div>

      <p className="info__row__text info__text">{info}</p>
    </div>
  );
}

export default SalongInfo;
