import React, { useContext, useMemo, useRef } from 'react';
import withStyle from './withStyle';
import CartIndicator from '@components/molecules/CartIndicator/CartIndicator';
import { Icon } from '@components/icons';
import CartBalloon from './Components/CartBalloon';
import Button from '@components/atoms/Button';
import { DrawerContext } from '@shared/Layout/LayoutContext';
import { CartContext } from '@shared/cart';
import useLockBodyScroll from '@shared/hooks/useLockBodyScroll';
import useOnClickOutside from '@shared/hooks/useOnClickOutside';

interface Props {
  className?: string;
}

const CartDrawer: React.FunctionComponent<Props> = ({ className }) => {
  const { toggleDrawer } = useContext(DrawerContext);
  const { balloons } = useContext(CartContext);
  const total = useMemo(() => {
    return balloons.reduce((acc, { count, balloon }) => acc + count * balloon.price, 0);
  }, [balloons]);

  useLockBodyScroll();

  const ref = useRef(null);
  useOnClickOutside(ref, toggleDrawer);

  return (
    <div className={className} ref={ref}>
      <div className='drawer-header'>
        <div className='drawer-header-top'>
          <button className='close-icon-btn' onClick={toggleDrawer}>
            <Icon name='Close' />
          </button>
          <CartIndicator itemsCount={balloons.length} />
        </div>
        <h2 className='my-cart'>MY CART</h2>
      </div>

      <div className={`drawer-content ${balloons.length <= 0 && 'empty'}`}>
        {balloons.length <= 0 && <h1>Your Cart is Empty.</h1>}
        {balloons.map((balloonWithQuantity: BalloonWithQuantity) => (
          <CartBalloon balloonWithQuantity={balloonWithQuantity} />
        ))}
      </div>

      <div className='drawer-footer'>
        <div className='total-container'>
          <h3>TOTAL</h3>
          <h3>${total}</h3>
        </div>
        <Button onClick={toggleDrawer} wide={true} content='PROCEED TO CHECKOUT' />
      </div>
    </div>
  );
};

export default withStyle(CartDrawer);
