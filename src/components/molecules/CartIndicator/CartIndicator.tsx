import React from 'react';
import withStyle from './withStyle';
import { Icon } from '@components/icons';

interface Props {
  className?: string;
  itemsCount?: number;
  onClick?: () => void;
}

const CartIndicator: React.FunctionComponent<Props> = ({ className, itemsCount, onClick }) => {
  return (
    <div className={className}>
      <button onClick={onClick} className='cart'>
        <Icon name='Buy' />
        {itemsCount && itemsCount > 0 ? <h5 className='items'>{itemsCount}</h5> : null}
      </button>
    </div>
  );
};

export default withStyle(CartIndicator);
