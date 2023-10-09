import React, { useContext } from 'react';
import withStyle from './withStyle';
import formatImage from '@utils/formatImage';
import { Icon } from '@components/icons';
import { CartContext } from '@shared/cart';
import { Link } from 'react-router-dom';
import { DrawerContext } from '@shared/Layout/LayoutContext';

interface Props {
  className?: string;
  balloonWithQuantity: BalloonWithQuantity;
}

const CartBalloon: React.FunctionComponent<Props> = ({ className, balloonWithQuantity }) => {
  const { balloon, count } = balloonWithQuantity;
  const { remove, subtractQuantity, addQuantity } = useContext(CartContext);
  const { toggleDrawer } = useContext(DrawerContext);

  return (
    <div className={className}>
      <div className='horizontal-container'>
        <img src={formatImage(balloon.imageUrl)} alt={balloon.id} />
        <div className='details'>
          <Link to={`/${balloon.id}`} onClick={toggleDrawer}>
            <h5 className='name'>{balloon.name}</h5>
          </Link>
          <h5 className='color'>{balloon.color}</h5>
          <div className='quantities'>
            <button type='button' onClick={() => addQuantity(balloon.id)}>
              +
            </button>
            <h5>{count}</h5>
            <button type='button' onClick={() => subtractQuantity(balloon.id)}>
              -
            </button>
          </div>
        </div>
        <div className='actions'>
          <h4>${balloon.price * count}</h4>
          <button type='button' className='remove-icon' onClick={() => remove(balloon.id)}>
            <Icon name='Delete' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default withStyle(CartBalloon);
