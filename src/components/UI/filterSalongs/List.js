import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import './List.css';

List.propTypes = {
  salongs: PropTypes.array
};

function List(props) {
  return (
    <div className="List">
      {props.salongs.map(salong => {
        return <ListItem key={salong.id} salong={salong}></ListItem>
      })}
    </div>
  );
}

export default List;
