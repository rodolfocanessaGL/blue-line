import React from 'react';
import { Provider } from 'react-redux';

import { AppRouter } from './routes';
import { store } from './store';

const App = () => <AppRouter />;

export default App;
