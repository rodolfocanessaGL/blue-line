import { combineEpics } from 'redux-observable';

import { newsEpic } from '../modules/Home'

export const rootEpic = combineEpics(
  newsEpic
);
