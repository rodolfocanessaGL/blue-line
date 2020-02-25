import { Epic } from 'redux-observable';
import { Observable } from 'rxjs/internal/Observable';
import { AjaxResponse } from 'rxjs/ajax';

import { NewsState, SourcesState } from './modules/Home/types';

export type Category = 'business' | 'general' | 'entertainment' | 'health' | 'science' | 'sports' | 'technology';

export type Language = 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'se' | 'ud' | 'zh' | 'all languages';

export type Country = 'ae' | 'ar' | 'at' | 'au' | 'be' | 'bg' | 'br' | 'ca' | 'ch' | 'cn' | 'co' | 'cu' | 'cz' | 'de' | 'eg' | 'fr' | 'gb' | 'gr' | 'hk' | 'hu' | 'id' | 'ie' | 'il' | 'in' | 'it' | 'jp' | 'kr' | 'lt' | 'lv' | 'ma' | 'mx' | 'my' | 'ng' | 'nl' | 'no' | 'nz' | 'ph' | 'pl' | 'pt' | 'ro' | 'rs' | 'ru' | 'sa' | 'se' | 'sg' | 'si' | 'sk' | 'th' | 'tr' | 'tw' | 'ua' | 'us' | 've' | 'za' | 'all countries';

export interface QueryParams {
  url: string;
  country?: Country;
  category?: Category;
  sources?: string;
  q?: string;
  pageSize?: number;
  page?: number;
  sortBy?: string;
  language? : Language;
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
  source: SourcesState;
  articleFilter: string;
}

export type ApiFunc = (params?: QueryParams) => Observable<any>;

export interface EpicsDeps {
  api: ApiFunc
}
