import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import {
  EpicsDeps,
  QueryParams,
  AppState
} from 'types';
import {
  fetchNews,
  fetchNewsSuccess,
  fetchNewsError,
  fetchSources,
  fetchSourcesSuccess,
  fetchSourcesError,
  setNewsLoading
} from './slices';
import {
  ArticlesResponse,
  SourcesResponse,
  SourceActionFetch,
  SourceActionSuccessPayload
} from './types';
import {
  NEWS_URL,
  NEWS_SORT_BY,
  NEWS_PAGE_SIZE,
  SOURCES_URL
} from './constants';

export const newsEpic: Epic = (action$, state$, { api }: EpicsDeps) => action$.pipe(
  ofType(fetchNews.type),
  mergeMap(() => {
    const state: AppState = state$.value;
    const sources = state.source.sources.filter(s => s.selected).map(s => s.id).join(',');
    const { articleFilter } = state;

    if (!sources && !articleFilter) {
      return of(setNewsLoading(false));
    }

    const apiParams: QueryParams = {
      url: NEWS_URL,
      pageSize: NEWS_PAGE_SIZE,
      page: state.news.page,
      sortBy: NEWS_SORT_BY,
      ...!!sources ? { sources } : {},
      ...!!articleFilter ? { q: articleFilter } : {}
    };

    return api(apiParams).pipe(
      map((res: ArticlesResponse) => fetchNewsSuccess(res)),
      catchError((error: Error) => of(fetchNewsError({ error: error.message })))
    );
  })
);

export const sourcesEpic: Epic = (action$, state$, { api }: EpicsDeps) => action$.pipe(
  ofType(fetchSources.type),
  mergeMap(({ payload }: SourceActionFetch) => {
    const apiParams: QueryParams = {
      url: SOURCES_URL,
      ...payload
    };

    return api(apiParams).pipe(
      map((res: SourcesResponse) => {
        const payload: SourceActionSuccessPayload = {
          ...res,
          sources: res.sources.map(s => ({ ...s, selected: false }))
        };

        return fetchSourcesSuccess(payload);
      }),
      catchError((error: Error) => of(fetchSourcesError({ error: error.message })))
    );
  })
);
