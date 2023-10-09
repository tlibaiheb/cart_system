import React, { ReactNode, useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import withStyle from './withStyle';
import CartDrawer from './components/CartDrawer';
import { CartContext } from '@shared/cart';
import { DrawerContext } from './LayoutContext';

interface Props {
  className?: string;
  children: ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ className, children }) => {
  const { drawerVisible } = useContext(DrawerContext);
  const { balloons } = useContext(CartContext);

  return (
    <div className={className}>
      <Header itemsCount={balloons?.length} />
      <div className='container'>
        {drawerVisible && <CartDrawer />}
        {children}
        {drawerVisible && <div className='overlay' />}
      </div>
      <Footer />
    </div>
  );
};

export default withStyle(Layout);
