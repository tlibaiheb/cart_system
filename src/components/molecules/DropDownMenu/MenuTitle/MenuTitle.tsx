import React, { useContext } from 'react';
import isFunction from 'lodash/isFunction';
import { DropDownMenuContext } from '../DropDownMenu';

interface MenuTitleInterface {
  children: React.ReactElement | ((props: Props) => React.ReactElement);
}

interface Props {
  selected: KeyValInterface;
  toggle: () => void;
  opened: boolean;
}

const MenuTitle: React.FunctionComponent<MenuTitleInterface> = ({ children, ...rest }) => {
  const { toggle, selected, opened } = useContext(DropDownMenuContext);

  return isFunction(children) ? (
    children({ selected, toggle, opened })
  ) : (
    <div onClick={() => toggle()} {...rest}>
      {children}
    </div>
  );
};

export default MenuTitle;
