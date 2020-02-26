import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LastLocationProvider } from 'react-router-last-location';

import { ErrorBoundary } from 'components';
import { HomeView } from 'modules/Home';
import { ArticleView } from 'modules/Article';
import { NotFoundView } from 'modules/NotFound';
import { ErrorView } from 'modules/Error';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <LastLocationProvider>
      <ErrorBoundary>
        <Switch>
          <Route path="/" component={HomeView} exact />
          <Route path="/article/:title" component={ArticleView} exact />
          <Route path="/error" component={ErrorView} exact />
          <Route component={NotFoundView} />
        </Switch>
      </ErrorBoundary>
    </LastLocationProvider>
  </Router>
);

export default AppRouter;
