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
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  }: WithRouterTestConfig = {}
) => {
  const Wrapper = ({ children }: any) => (
    <Router history={history}>
      {children}
    </Router>
  );

  return {
    ...render(ui, { wrapper: Wrapper }),
    history
  };
};

export default withRouter;
