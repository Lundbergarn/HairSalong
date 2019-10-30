import React from 'react';
import { Link } from 'react-router-dom';
import './SalongNavigation.css';

function SalongNavigation() {
  return (
    <div className="navigation__salong">
      <Link
        className="navigation__text navigation__text--selected"
        to="#"
      >
        Info
      </Link>
      
      <Link
        className="navigation__text"
        to="#"
      >
        Schema
      </Link>
    </div>
  );
}

export default SalongNavigation;
