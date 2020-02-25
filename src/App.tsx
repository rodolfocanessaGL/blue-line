import React from 'react';

import { AppRouter } from 'routes';
import { ErrorBoundary } from 'components';

const App = () => (
  <ErrorBoundary>
    <AppRouter />
  </ErrorBoundary>
);

export default App;
