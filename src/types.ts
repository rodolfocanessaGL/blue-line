import { Epic } from 'redux-observable';
import { Observable } from 'rxjs/internal/Observable';
import { AjaxResponse } from 'rxjs/ajax';

import { NewsState } from './modules/Home/types';

export type Category = 'business' | 'general' | 'entertainment' | 'health' | 'science' | 'sports' | 'technology';

export interface QueryParams {
  country?: string;
  category?: Category;
  sources?: string;
  q?: string;
  pageSize?: number;
  page?: number;
}

export interface Action<T = string, P = any> {
  type: T;
  payload?: P;
}

export interface ApiResponse<T> extends AjaxResponse {
  response: T;
}

export interface AppState {
  news: NewsState;
}

export type ApiFunc = (params?: QueryParams) => Observable<any>;

export interface EpicsDeps {
  api: ApiFunc
}
