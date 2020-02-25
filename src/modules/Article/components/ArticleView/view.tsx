import React, { FunctionComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RouteComponentProps, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

import { AppState } from 'types';
import { formatArticleId, formatArticleDate } from 'utils';
import { REDIRECT_PATCH } from '../../constants';
import { ArticleRouteParams } from '../../types';
import { ArticleImg } from './styles';

const ArticleView: FunctionComponent<RouteComponentProps<ArticleRouteParams>> = ({
  match: {
    params: {
      title
    }
  }
}) => {
  const { articles } = useSelector((state: AppState) => state.news);
  const article = articles.filter(a => formatArticleId(a.title) === title)[0];

  if (!article) {
    return <Redirect to={REDIRECT_PATCH} />
  }

if (true) {
  throw new Error('');
}

  const {
    source: { name: sourceName },
    title: articleTitle,
    urlToImage,
    url,
    author,
    publishedAt,
    content
  } = article;
  const formatedDate = formatArticleDate(publishedAt);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="mb-3 mt-5">{sourceName}</p>
            <h1 className="mb-5 w-75">{articleTitle}</h1>
            <p className="d-flex justify-content-md-between justify-content-sm-start">
              <span>{`${author ? `By ${author} - ${formatedDate}` : `${formatedDate}`}`}</span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Article Link
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <ArticleImg
        className="mb-5"
        url={urlToImage}
      />
      <Container>
        <Row>
          <Col>
            <p className="mb-5">{content}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArticleView;
