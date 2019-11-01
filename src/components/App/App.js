import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SalongsProvider } from './SalongsContext';
import SalongView from '../../routes/SalongView';
import FilterSalongs from '../../routes/FilterSalongs';
import NotFound from '../../routes/NotFound';
import data from '../../assets/data.json'

const App = () => {
  const [salongs, setSalongs] = useState([]);

  useEffect(() => {
    setSalongs(data);
  },[])

  return (
    <SalongsProvider value={salongs}>
      <Router >
          <Switch>
            <Route
              path="/filter_salongs"
              exact
              component={ FilterSalongs }
            />
            <Route
              path="/salong/*"
              exact
              component={ SalongView } 
            />
            <Route component={NotFound} />
          </Switch>
      </Router>
    </SalongsProvider>
  );
};

export default App;
