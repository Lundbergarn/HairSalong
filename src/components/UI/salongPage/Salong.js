import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SalongsContext from '../../App/SalongsContext';
import SalongHeader from './SalongHeader';
import SalongNavigation from './SalongNavigation';
import SalongInfo from './SalongInfo';
import './Salong.css';

function Salong() {
  let { id } = useParams();
  const salongs = useContext(SalongsContext);
  const salong = salongs.filter(salong => {
    if (salong.id === id) {
      return salong;
    }
    return null;
  });

  return (
    <div className="salong">
      <SalongHeader salong={salong[0]}/>
      <SalongNavigation/>
      <SalongInfo salong={salong[0]}/>
    </div>
  );
}

export default Salong;
