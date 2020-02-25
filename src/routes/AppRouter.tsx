import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LastLocationProvider } from 'react-router-last-location';

import { HomeView } from 'modules/Home';
import { ArticleView } from 'modules/Article';
import { NotFoundView } from 'modules/NotFound'

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <LastLocationProvider>
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/article/:title" component={ArticleView} exact />
        <Route component={NotFoundView} />
      </Switch>
    </LastLocationProvider>
  </Router>
);

export default AppRouter;
