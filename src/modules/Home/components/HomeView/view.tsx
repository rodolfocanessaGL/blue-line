import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { fetchNews } from '../../slice';
import { ArticleCard } from '../ArticleCard';
import { AppState } from '../../../../types';
import { formatArticleId } from '../../utils';

const HomeView: FunctionComponent<any> = (props) => {
  const news = useSelector((state: AppState) => state.news);
  const dispatch = useDispatch();
  const { articles } = news;

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="bg-light">
      <h1 className="text-center py-4">News Feed</h1>
      <Container>
        <Row>
          {articles.map(article => (
            <ArticleCard
              key={formatArticleId(article.title)}
              {...article}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
};

export default HomeView;
