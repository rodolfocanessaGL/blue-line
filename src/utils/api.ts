import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

import { QueryParams } from 'types';

const getParamsStr = (params: QueryParams): string => {
  const entries = Object.entries(params);
  const paramsArray = entries.map(([k, v]) => `${k}=${v}`);

  if (!paramsArray.length) {
    return '';
  }

  return `&${paramsArray.join('&')}`;
};

const formatUrl = (url: string): string => {
  if (url.charAt(0) === '/') {
    return url;
  }

  return `/${url}`;
};

const api = <T = any>(params: QueryParams): Observable<T> => {
  const { url } = params;
  const urlFormated = formatUrl(url);
  const urlBase = `${process.env.REACT_APP_ENDPOINT}${urlFormated}?apiKey=${process.env.REACT_APP_API_KEY}`;
  const paramStr = getParamsStr(params);
  const fullUrl = `${urlBase}${paramStr}`;

  return ajax(fullUrl).pipe(map((res: AjaxResponse) => res.response));
};

export default api;
