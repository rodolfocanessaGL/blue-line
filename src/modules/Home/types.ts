import { Action } from 'redux';

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
