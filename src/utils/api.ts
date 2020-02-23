import { ajax, AjaxResponse } from 'rxjs/ajax';

import { QueryParams } from '../types';
import { map } from 'rxjs/operators';

const getParamsStr = (params: QueryParams): string => {
  const entries = Object.entries(params);
  const paramsArray = entries.map(([v, k]) => `${v}=${k}`);

  if (!paramsArray.length) { 
    return '';
  }

  return `&${paramsArray.join('&')}`;
};

const api = (params: QueryParams = {}) => {
  const urlBase = `${process.env.REACT_APP_ENDPOINT}?apiKey=${process.env.REACT_APP_API_KEY}`.trim();
  const paramStr = getParamsStr(params);
  const fullUrl = `${urlBase}${paramStr}`;

  return ajax(fullUrl)
    .pipe(
      map((res: AjaxResponse) => res.response)
    );
};

export default api;
