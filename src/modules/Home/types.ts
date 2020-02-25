import { Action } from 'redux';

import { Category, Language, Country } from './../../types';

export interface ArticleSource {
  id: string;
  name: string;
}

export interface Article {
  source: ArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ArticlesResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface ArticleActionErrorPayload {
  error: null | string;
}

export interface NewsState {
  loading: boolean;
  articles: Article[];
  totalResults: number;
  error: null | string;
  page: number;
}

export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface SourceState extends Source {
  selected: boolean;
}

export interface SourcesState {
  loading: boolean;
  sources: SourceState[];
  error: null | string;
}

export interface SourceActionFetchPayload {
  category?: Category;
  language?: Language;
  country?: Country;
}

export interface SourceActionFetch {
  type: string;
  payload: SourceActionFetchPayload;
}

export interface SourcesResponse {
  status: string;
  sources: Source[];
}

export interface SourceActionSuccessPayload extends SourcesResponse {
  sources: SourceState[];
}

export interface SourceActionErrorPayload {
  error: null | string;
}

export interface SourceFilterDropdownProps<T = string> {
  id: string;
  title: string;
  items: T[];
  onClick: Function;
  selected?: T;
}

export interface SourceDropdownProps {
  id: string;
  title: string;
}

export type SourceAll = 'all';

export type SourceCategory = Category | SourceAll;

export type SourceLanguage = Language | SourceAll;

export type SourceCountry = Country | SourceAll;
