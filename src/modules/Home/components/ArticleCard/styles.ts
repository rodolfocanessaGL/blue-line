import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import { LazyImg } from '../../../../components';
import { toRem, colors } from '../../../../styles';

export const CardContainer = styled(Card)`
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);

  :hover {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
    transform: translate(0, -10px); 
  }
`;

export const ContentTop = styled(Card.Text)`
  display: flex;
  justify-content: space-between;
`;

export const CardCol = styled(Col)`
  margin-bottom: 30px;
`;

export const CardTitle = styled(Card.Title)`
  margin-bottom: 0;
  padding: ${toRem(20)};
`;

export const CardImg = styled(LazyImg)`
  object-fit: cover;
  width: 100%;
  height: 250px;
`;

export const StyledLink = styled(Link)`
  color: ${colors.shark};

  :hover {
    color: ${colors.shark};
    text-decoration: none;
  }
`;
