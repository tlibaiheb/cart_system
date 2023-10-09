/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext } from 'react';
import withStyle from './withStyle';
import { DropDownMenu, MenuContent, MenuTitle } from '@components/molecules/DropDownMenu';
import { Icon } from '@components/icons';
import { Context } from '../FiltersContext/FiltersContext';

interface Props {
  className?: string;
  type: string;
  options: KeyValInterface[];
  title: string;
}

const FilterSelector: React.FunctionComponent<Props> = ({ className, options, type, title }) => {
  const { setFilter, filters } = useContext(Context);

  const changeFilter = useCallback(
    val => {
      filters[type] === val ? setFilter(type)('') : setFilter(type)(val);
    },
    [filters],
  );
  return (
    <div className={className}>
      <DropDownMenu
        options={options}
        onDropDownChange={val => changeFilter(val.key)}
        defaultValue={title}
      >
        <MenuTitle>
          {({ selected, toggle, opened }) => (
            <button className={`dropdown-menu-title ${opened ? '--opened' : ''}`} onClick={toggle}>
              {selected.value}
              <Icon name='Arrow' />
            </button>
          )}
        </MenuTitle>
        <MenuContent />
      </DropDownMenu>
    </div>
  );
};

export default withStyle(FilterSelector);
