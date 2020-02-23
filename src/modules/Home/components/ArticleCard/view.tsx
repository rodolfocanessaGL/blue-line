import React, { FunctionComponent } from 'react';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { Ellipsis } from '../../../../components';
import { getMonth } from '../../../../utils';
import { Article } from '../../types';
import { formatArticleId } from '../../utils';
import {
  CardContainer,
  ContentTop,
  CardCol,
  CardTitle,
  CardImg,
  StyledLink
} from './styles';

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const monthName = getMonth(date.getMonth());
  const day = date.getDate();
  const year = date.getFullYear();

  return `${monthName} ${day}, ${year}`;
};

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
            <Card.Text>
              <Ellipsis lg={110}>{description}</Ellipsis>
            </Card.Text>
          </OverlayTrigger>
          <div className="text-center">{formatDate(publishedAt)}</div>
        </Card.Body>
      </CardContainer>
    </StyledLink>
  </CardCol>
);

export default ArticleCard;
