import React, {
  useState,
  useEffect,
  KeyboardEvent,
  FormEvent,
  useCallback,
  MouseEvent,
  memo
} from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from 'types';
import {
  DEFAULT_ARTICLE_FILTER_VALUE,
  SEARCH_BUTTON_ID
} from '../../constants';
import {
  setArticleFilter,
  fetchNews,
  resetNews
} from '../../slices';

const ArticleFilter = () => {
  const [ value, setValue ] = useState(DEFAULT_ARTICLE_FILTER_VALUE);
  const hasSources = useSelector<AppState, boolean>((state) => !!state.source.sources.length);
  const dispatch = useDispatch();
  const onFilter = useCallback(
    (e: KeyboardEvent | MouseEvent<HTMLButtonElement>) => {
      if (
        ((e as KeyboardEvent).key === 'Enter') ||
        ((e.target as HTMLButtonElement).id === SEARCH_BUTTON_ID)
      ) {
        dispatch(setArticleFilter(value));
        dispatch(resetNews());
        dispatch(fetchNews());
      }
    },
    [dispatch, value]
  );
  const onKeywordChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
    []
  );

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
        onKeyDown={onFilter}
      />
      <InputGroup.Append>
        <Button
          id={SEARCH_BUTTON_ID}
          variant="outline-secondary"
          onClick={onFilter}
        >
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default memo(ArticleFilter);
