import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  DEFAULT_CATEGORY,
  DEFAULT_COUNTRY,
  DEFAULT_LANGUAGE
} from '../../constants';
import {
  SourceCategory,
  SourceLanguage,
  SourceCountry,
  SourceActionFetchPayload
} from '../../types';
import {
  categories,
  languages,
  countries
} from './dropdown-options';
import {
  fetchSources,
  resetNews,
  setArticleFilter
} from '../../slices';
import { SourceFilterDropdown } from '../SourceFilterDropdown';
import { SourceDropdown } from '../SourceDropdown';
import { ArticleFilter } from '../ArticleFilter';

const getFetchSourcesParams = (
  category: SourceCategory,
  language: SourceLanguage,
  country: SourceCountry
): SourceActionFetchPayload => {

  return {
    ...category !== DEFAULT_CATEGORY ? { category } : {},
    ...language !== DEFAULT_LANGUAGE ? { language } : {},
    ...country !== DEFAULT_COUNTRY ? { country } : {}
  };
};

const SourcesFilter = () => {
  const [ category, setCategory ] = useState<SourceCategory>(DEFAULT_CATEGORY);
  const [ language, setLanguage ] = useState<SourceLanguage>(DEFAULT_LANGUAGE);
  const [ country, setCountry ] = useState<SourceCountry>(DEFAULT_COUNTRY);
  const dispatch = useDispatch();
  const sourceFilterClick = (setFilterState: Function) => (v: string) => {
    setFilterState(v);
    dispatch(resetNews());
    dispatch(setArticleFilter(''));
  };

  useEffect(() => {
    const fetchSourcesParams = getFetchSourcesParams(category, language, country);

    dispatch(fetchSources(fetchSourcesParams));
  }, [dispatch, category, language, country]);

  return (
    <Row className="mb-3">
      <Col lg={8} md={12}>
        <div className="d-md-flex">
          <div className="mr-2">
            <SourceFilterDropdown
              id="countries"
              title="Country"
              items={countries}
              onClick={sourceFilterClick(setCountry)}
              selected={country}
            />
          </div>
          <div className="mr-2">
            <SourceFilterDropdown
              id="languages"
              title="Language"
              items={languages}
              onClick={sourceFilterClick(setLanguage)}
              selected={language}
            />
          </div>
          <div className="mr-2">
            <SourceFilterDropdown
              id="categores"
              title="Category"
              items={categories}
              onClick={sourceFilterClick(setCategory)}
              selected={category}
            />
          </div>
          <div>
            <SourceDropdown />
          </div>
        </div>
      </Col>
      <Col className="justify-content-end" lg={4} md={12}>
        <ArticleFilter />
      </Col>
    </Row>
  );
};

export default SourcesFilter;
