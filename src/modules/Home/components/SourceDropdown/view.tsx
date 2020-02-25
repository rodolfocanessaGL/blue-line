import React, { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormControl from 'react-bootstrap/FormControl';
import classnames from 'classnames';

import { AppState } from 'types';
import { SourcesState } from '../../types';
import { DEFULT_SOURCE_FILTER, MAX_SOURCES } from '../../constants';
import { selectSource, fetchNews, resetNews } from '../../slices';
import { FilterDropdown } from './styles';

const SourceDropdown: FunctionComponent = () => {
  const [ filter, setFilter ] = useState(DEFULT_SOURCE_FILTER);
  const { sources } = useSelector<AppState, SourcesState>((state) => state.source);
  const dispatch = useDispatch();

  return (
    <FilterDropdown
      id="source-filter-dropdown"
      className="mb-2"
      title={`Source: ${sources.filter(s => s.selected).length}`}
      variant="success"
    >
      <FormControl
        autoFocus
        className="mx-3 my-2 w-auto"
        placeholder="Type to filter..."
        value={filter}
        onChange={(e: any) => setFilter(e.target.value)}
      />
      {
        sources
          .filter(({ name }) => filter === '' || name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
          .map((s) => {
            const { name, id, selected } = s;

            return (
              <button
                key={id}
                className={classnames('dropdown-item', {
                  active: selected
                })}
                onClick={() => {
                  const selected = sources.filter(s => s.selected).length

                  if (selected < MAX_SOURCES) {
                    dispatch(selectSource(s));
                    dispatch(resetNews());
                    dispatch(fetchNews());
                  }
                }}
              >
                {name}
              </button>
            )
          })
      }
    </FilterDropdown>
  );
};

export default SourceDropdown;
