import {
  newsReducer,
  sourcesReducer,
  articleFilterReducer
} from 'modules/Home';

export const rootReducers = {
  news: newsReducer,
  source: sourcesReducer,
  articleFilter: articleFilterReducer
};
