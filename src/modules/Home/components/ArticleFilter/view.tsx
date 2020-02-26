import React, { useState, useEffect, KeyboardEvent, FormEvent } from 'react';
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
  const onFilter = () => {
    dispatch(setArticleFilter(value));
    dispatch(resetNews());
    dispatch(fetchNews());
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onFilter()
    }
  };
  const onKeywordChange = (e: FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

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
        onChange={onKeywordChange}
        onKeyDown={onKeyDown}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={onFilter}
        >
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default ArticleFilter;
