/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext } from 'react';
import withStyle from './withStyle';
import { Context } from '@pages/Dashboard/components/FiltersContext/FiltersContext';

interface Props {
  className?: string;
  type: string;
  title: string;
  options: KeyValInterface[];
}

const FiltersDrawer: React.FunctionComponent<Props> = ({ className, options, title, type }) => {
  const { setFilter, filters } = useContext(Context);

  const changeFilter = useCallback(
    val => {
      filters[type] === val ? setFilter(type)('') : setFilter(type)(val);
    },
    [filters],
  );

  return (
    <div className={className}>
      <h4 className='title'>{title}</h4>
      <ul className='container'>
        {options.map(({ key, value }) => (
          <li
            key={key}
            onClick={() => changeFilter(key)}
            className={`filter-item ${filters[type] === key && 'selected'}`}
          >
            <h6>{value}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withStyle(FiltersDrawer);
