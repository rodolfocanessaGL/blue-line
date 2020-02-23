import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { EpicsDeps, QueryParams } from '../../types';
import { fetchNews, fetchComplete, fetchError } from './slice';
import { ArticlesResponse } from './types';

export const newsEpic: Epic = (action$, state$, { api }: EpicsDeps) => action$.pipe(
  ofType(fetchNews.type),
  mergeMap(action => {
    const apiParams: QueryParams = {
      pageSize: 20,
      page: state$.value.news.page,
      country: 'us'
    };

    return api(apiParams).pipe(
      map((res: ArticlesResponse) => fetchComplete(res)),
      catchError((error: Error) => of(fetchError({ error: error.message })))
    )
  })
);
