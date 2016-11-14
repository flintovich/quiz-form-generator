import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './pages/HomePage/Home';
import FormCreator from './pages/NewForm/NewForm';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/create-form" component={FormCreator} />
    </Route>
  </Router>
);

export default Routes;