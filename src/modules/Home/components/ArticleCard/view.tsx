import React, { FunctionComponent } from 'react';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { Ellipsis } from 'components';
import { formatArticleId, formatArticleDate } from 'utils';
import { Article } from '../../types';
import {
  CardContainer,
  ContentTop,
  CardCol,
  CardTitle,
  CardImg,
  CardDescription,
  StyledLink
} from './styles';

const ArticleCard: FunctionComponent<Article> = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt
}) => (
  <CardCol lg={4} md={6} xs={12}>
    <StyledLink to={`article/${formatArticleId(title)}`}>
      <CardContainer>
        <CardTitle className="text-center">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-article-title-${formatArticleId(title)}`}>{title}</Tooltip>
            }
          >
            <span><Ellipsis lg={18}>{title}</Ellipsis></span>
          </OverlayTrigger>
        </CardTitle>
        <CardImg
          src={urlToImage}
          alt={title}
          title={title}
        />
        <Card.Body>
          <ContentTop>
            <span>{source.name || '' }</span>
            <span>{author ? `By ${author}` : ''}</span>
          </ContentTop>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-article-description-${formatArticleId(title)}`}>{description}</Tooltip>
            }
          >
            <CardDescription>
              <Ellipsis lg={110}>{description}</Ellipsis>
            </CardDescription>
          </OverlayTrigger>
          <div className="text-center">{formatArticleDate(publishedAt)}</div>
        </Card.Body>
      </CardContainer>
    </StyledLink>
  </CardCol>
);

export default ArticleCard;
