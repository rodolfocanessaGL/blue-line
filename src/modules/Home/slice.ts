import { createSlice, PayloadAction,  } from "@reduxjs/toolkit";

import {
  NewsState,
  Article,
  ArticlesResponse,
  ArticleActionErrorPayload
} from './types';

const initialState: NewsState = {
  loading: false,
  articles: [],
  totalResults: 0,
  page: 1,
  error: null
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetchNews(state) {
      state.loading = true;
    },
    fetchComplete(state, { payload }: PayloadAction<ArticlesResponse>) {
      state.loading = false;
      state.articles = [ ...state.articles as Article[], ...payload.articles ];
      state.totalResults = payload.totalResults;
      state.page = state.page + 1;
      state.error = null;
    },
    fetchError(state, { payload }: PayloadAction<ArticleActionErrorPayload>) {
      state.loading = false;
      state.error = payload.error;
    }
  }
});

export const {
  fetchNews,
  fetchComplete,
  fetchError
} = newsSlice.actions;

export default newsSlice.reducer;
