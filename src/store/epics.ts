import { combineEpics } from 'redux-observable';

import { newsEpic, sourcesEpic } from 'modules/Home';

export const rootEpic = combineEpics(newsEpic, sourcesEpic);
