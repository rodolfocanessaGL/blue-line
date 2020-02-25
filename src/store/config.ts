import {
  createStore,
  applyMiddleware,
  combineReducers
} from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import { api } from 'utils';
import { rootReducers } from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware({
  dependencies: { api }
});

const middlewares =
  process.env.NODE_ENV === 'development'
    ? applyMiddleware(logger, epicMiddleware)
    : applyMiddleware(epicMiddleware);

const store = createStore(combineReducers(rootReducers), middlewares);

epicMiddleware.run(rootEpic);

export default store;
