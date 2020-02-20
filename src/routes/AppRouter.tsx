import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { HomeView } from '../modules/Home';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={HomeView}  />
    </Switch>
  </Router>
);

export default AppRouter;
