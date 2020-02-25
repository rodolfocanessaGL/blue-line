import styled from 'styled-components';

import { ArticleImgProps } from '../../types';

export const ArticleImg = styled.div<ArticleImgProps>`
  background-image: url(${({ url }) => url});
  background-size: cover;
  padding-top: 56.25%;
  background-repeat: no-repeat;
`;
