import React, { useContext } from 'react';

import SalongsContext from '../../App/SalongsContext';
import SalongHeader from './SalongHeader';
import SalongNavigation from './SalongNavigation';
import SalongInfo from './SalongInfo';
import './Salong.css';

function Salong() {
  const salongs = useContext(SalongsContext);
  const salong = salongs.filter(salong => {
    let href = window.location.pathname;
    if (('/salong/' + salong.id) === href) {
      return salong;
    }
    return null;
  });

  return (
    <div className="salong">
      <SalongHeader salong={salong}/>
      <SalongNavigation/>
      <SalongInfo salong={salong}/>
    </div>
  );
}

export default Salong;
