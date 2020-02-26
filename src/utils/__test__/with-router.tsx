import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

interface WithRouterTestConfig {
  path?: string;
  route?: string;
  history?: any;
}

const withRouter = (
  ui: any,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  }: WithRouterTestConfig = {}
) => {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>
    )
  };
};

export default withRouter;
