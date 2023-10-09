import React from 'react';
import { Provider } from 'urql';
import client from '@graphql/client';
import { Switch, Route } from 'react-router-dom';
import { CartProvider } from '@shared/cart';
import AppRoutes from './AppRoutes';

const Routes: React.FunctionComponent = () => {
  return (
    <Provider value={client}>
      <CartProvider>
        <Switch>
          <Route path='/'>
            <AppRoutes />
          </Route>
          {/*Define other app Routes Here (ie. login) .. */}
        </Switch>
      </CartProvider>
    </Provider>
  );
};
export default Routes;
