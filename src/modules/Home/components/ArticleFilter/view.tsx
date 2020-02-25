import React, { useState, useEffect } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from 'types';
import { DEFAULT_ARTICLE_FILTER_VALUE } from '../../constants';
import {
  setArticleFilter,
  fetchNews,
  resetNews
} from '../../slices';


const ArticleFilter = () => {
  const [ value, setValue ] = useState(DEFAULT_ARTICLE_FILTER_VALUE);
  const hasSources = useSelector<AppState, boolean>((state) => !!state.source.sources.length);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasSources) {
      setValue('');
    }
  }, [hasSources]);

  return (
    <InputGroup>
      <FormControl
        placeholder="By keyword or phrase"
        aria-label="By keyword or phrase"
        aria-describedby="basic-addon2"
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            dispatch(setArticleFilter(value));
            dispatch(resetNews());
            dispatch(fetchNews());
          }
        }}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={() => {
            dispatch(setArticleFilter(value));
            dispatch(resetNews());
            dispatch(fetchNews());
          }}
        >
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default ArticleFilter;
