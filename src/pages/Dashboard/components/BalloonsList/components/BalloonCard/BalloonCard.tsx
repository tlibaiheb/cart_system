import React, { useContext } from 'react';
import withStyle from './withStyle';
import formatImage from '@utils/formatImage';
import { Icon } from '@components/icons';
import { CartContext } from '@shared/cart';
import { DrawerContext } from '@shared/Layout/LayoutContext';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
  balloon: Balloon;
}

const BalloonCard: React.FunctionComponent<Props> = ({ className, balloon }) => {
  const { add, isInCart } = useContext(CartContext);
  const { openDrawer } = useContext(DrawerContext);
  const isAdded = isInCart(balloon.id);

  const addItemToCart = (balloon: Balloon) => {
    add(balloon);
    openDrawer();
  };

  return (
    <Link to={`/${balloon.id}`} className={className}>
      <img src={formatImage(balloon.imageUrl)} alt={balloon.id} />
      <div className='details'>
        <div className='main-details'>
          <h4 className={`name ${isAdded && 'name-selected'}`}>{balloon.name}</h4>
          <h6 className='price'>${balloon.price}</h6>
        </div>
        <button
          type='button'
          className={`cart ${isAdded && 'selected'}`}
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            addItemToCart(balloon);
          }}
        >
          <Icon name='Buy' />
        </button>
      </div>
    </Link>
  );
};

export default withStyle(BalloonCard);
