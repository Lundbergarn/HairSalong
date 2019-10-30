import React, { useContext, useState } from 'react';

import SalongsContext from '../../App/SalongsContext';
import Navigation from './Navigation';
import Filter from './Filter';
import List from './List';
import './FilterSalongs.css';

function FilterSalongs() {
  const salongs = useContext(SalongsContext);
  const [price, setPrice] = useState(0);

  function filterHandler(price) {
    setPrice(Number(price));
  }

  return (
    <div className="filter__salongs">
      <Navigation />
      <Filter filterHandler={filterHandler}/>
      <List salongs={salongs.filter(salong => {
        if(price === 0) return salong;
        else if((salong.price >= price) && salong.price <= (price + 100)) {
          return salong;
        }
        return null;
      })}/>
    </div>
  );
}

export default FilterSalongs;
