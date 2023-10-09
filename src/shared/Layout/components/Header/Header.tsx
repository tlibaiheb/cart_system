import React, { useContext } from 'react';
import { Icon } from '@components/icons';
import { Link } from 'react-router-dom';
import withStyle from './withStyle';
import CartIndicator from '@components/molecules/CartIndicator';
import { DrawerContext } from '@shared/Layout/LayoutContext';

interface Props {
  className?: string;
  itemsCount?: number;
}

const Header: React.FunctionComponent<Props> = ({ className, itemsCount }) => {
  const { toggleDrawer } = useContext(DrawerContext);
  return (
    <div className={className}>
      <Link to='/' className='logo'>
        <Icon name='Logo' />
        <h6>Balloons</h6>
      </Link>
      <CartIndicator itemsCount={itemsCount} onClick={toggleDrawer} />
    </div>
  );
};

export default withStyle(Header);
