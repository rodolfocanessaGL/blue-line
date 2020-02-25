import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  NewsState,
  Article,
  ArticlesResponse,
  ArticleActionErrorPayload,
  SourcesState,
  SourceState,
  SourceActionSuccessPayload,
  SourceActionErrorPayload,
  SourceActionFetchPayload
} from './types';
import {
  NEWS_SLICE_NAME,
  SOURCES_SLICE_NAME,
  ARTICLE_FILTER_SLICE_NAME
} from './constants';

const newsInitialState: NewsState = {
  loading: false,
  articles: [],
  totalResults: 0,
  page: 1,
  error: null
};

const newsSlice = createSlice({
  name: NEWS_SLICE_NAME,
  initialState: newsInitialState,
  reducers: {
    fetchNews(state) {
      state.loading = true;
    },
    resetNews(state) {
      state.loading = false;
      state.articles = [];
      state.totalResults = 0;
      state.page = 1;
      state.error = null;
    },
    fetchNewsSuccess(state, { payload }: PayloadAction<ArticlesResponse>) {
      state.loading = false;
      state.articles = [ ...state.articles as Article[], ...payload.articles ];
      state.totalResults = payload.totalResults;
      state.page = state.page + 1;
      state.error = null;
    },
    fetchNewsError(state, { payload }: PayloadAction<ArticleActionErrorPayload>) {
      state.loading = false;
      state.error = payload.error;
    },
    setNewsLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    }
  }
});

const sourcesInitialState: SourcesState = {
  loading: false,
  sources: [],
  error: null
};

const sourcesSlice = createSlice({
  name: SOURCES_SLICE_NAME,
  initialState: sourcesInitialState,
  reducers: {
    fetchSources(state, { payload }: PayloadAction<SourceActionFetchPayload>) {
      state.loading = true;
    },
    fetchSourcesSuccess(state, { payload }: PayloadAction<SourceActionSuccessPayload>) {
      state.loading = false;
      state.sources = payload.sources;
      state.error = null;
    },
    fetchSourcesError(state, { payload }: PayloadAction<SourceActionErrorPayload>) {
      state.loading = false;
      state.error = payload.error;
    },
    selectSource(state, { payload }: PayloadAction<SourceState>) {
      state.sources.forEach(s => {
        if (s.id === payload.id) {
          s.selected = !s.selected;
        }
      });
    },
    resetSources(state) {
      state.sources.forEach(s => s.selected = false);
    }
  }
});

const articleFilterInitialState = '';

const articleFilterSlice = createSlice({
  name: ARTICLE_FILTER_SLICE_NAME,
  initialState: articleFilterInitialState,
  reducers: {
    setArticleFilter(state, { payload }: PayloadAction<string>) {
      return payload;
    }
  }
});

export const {
  fetchNews,
  resetNews,
  fetchNewsSuccess,
  fetchNewsError,
  setNewsLoading
} = newsSlice.actions;
export const {
  fetchSources,
  fetchSourcesSuccess,
  fetchSourcesError,
  selectSource,
  resetSources
} = sourcesSlice.actions;
export const { setArticleFilter } = articleFilterSlice.actions;
export const { reducer: newsReducer } = newsSlice;
export const { reducer: sourcesReducer } = sourcesSlice;
export const { reducer: articleFilterReducer } = articleFilterSlice;
