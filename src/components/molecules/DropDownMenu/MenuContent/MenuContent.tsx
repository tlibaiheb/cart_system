import React, { useContext, useRef } from 'react';
import { DropDownMenuContext } from '../DropDownMenu';
import useOnClickOutside from '@shared/hooks/useOnClickOutside';
import MenuContentWrapper from './MenuContentWrapper';

interface MenuContentInterface {
  className?: string;
}

const MenuContent: React.FunctionComponent<MenuContentInterface> = ({ className }) => {
  const { opened, onChange, options, toggle, selected } = useContext(DropDownMenuContext);

  const ref = useRef(null);
  useOnClickOutside(ref, toggle);

  return opened ? (
    <MenuContentWrapper ref={ref} className={`${className || ''} ${opened ? 'opened' : ''}`}>
      {options.map(val => (
        <button
          key={val.key}
          onClick={() => onChange(val)}
          className={selected.key === val.key ? 'selected' : ''}
        >
          {val.value}
        </button>
      ))}
    </MenuContentWrapper>
  ) : null;
};

export default MenuContent;
