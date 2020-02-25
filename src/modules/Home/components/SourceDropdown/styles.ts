import styled from 'styled-components';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { toRem } from 'styles';

export const FilterDropdown = styled(DropdownButton)`
  .dropdown-menu {
    max-height: ${toRem(300)};
    overflow: scroll;
  }
`;
