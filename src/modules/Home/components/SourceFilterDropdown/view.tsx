import React, { FunctionComponent } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { SourceFilterDropdownProps } from '../../types';
import { FilterDropdown } from './styles';

const SourceFilterDropdown: FunctionComponent<SourceFilterDropdownProps> = ({
  id,
  title,
  items,
  onClick,
  selected
}) => (
  <FilterDropdown
    id={`source-filter-dropdown-${id}`}
    className="mb-2"
    title={`${title}: ${selected}`}
  >
    {items.map(item => {
      const onItemClick = () => onClick(item);

      return (
        <Dropdown.Item
          key={item}
          onClick={onItemClick}
          active={selected === item}
          as="button"
        >
          {item}
        </Dropdown.Item>
      )
    })}
  </FilterDropdown>
);

export default SourceFilterDropdown;
