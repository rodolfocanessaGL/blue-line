import React, { FunctionComponent, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfiniteScroll from 'react-infinite-scroller';
import { useLastLocation } from 'react-router-last-location';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { formatArticleId } from 'utils';
import { AppState } from 'types';
import { NewsState } from '../../types';
import { fetchNews, resetSources, resetNews, setArticleFilter } from '../../slices';
import { SourcesFilter } from '../SourcesFilter';
import { ArticleCard } from '../ArticleCard';
import { LoadingImg, HomeViewContainer } from './styles';
import loadingSrc from './loading.svg';

const HomeView: FunctionComponent<RouteComponentProps>  = (props) => {
  const { articles, totalResults, loading: newsLoading } = useSelector<AppState, NewsState>((state) => state.news);
  const sourcesLoading = useSelector<AppState, boolean>((state) => state.source.loading);
  const lastLocation = useLastLocation();
  const dispatch = useDispatch();
  const loadMore = () => dispatch(fetchNews());

  useEffect(() => {
    if (lastLocation !== null) {
      dispatch(resetSources());
      dispatch(resetNews());
      dispatch(setArticleFilter(''));
    }
  }, [dispatch, lastLocation]);

  return (
    <HomeViewContainer className="bg-light">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center py-4">News Feed</h1>
          </Col>
        </Row>
        <SourcesFilter />
        <InfiniteScroll
          className="row"
          pageStart={0}
          loadMore={loadMore}
          hasMore={totalResults > articles.length && !newsLoading}
        >
          {articles.map(article => (
            <ArticleCard
              key={formatArticleId(article.title)}
              {...article}
            />
          ))}
        </InfiniteScroll>
        {(newsLoading || sourcesLoading) && (
          <Row>
            <Col>
              <LoadingImg src={loadingSrc} alt="loading" />
            </Col>
          </Row>
        )}
      </Container>
    </HomeViewContainer>
  )
};

export default HomeView;
