import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '@pages/Dashboard';
import Layout from '@shared/Layout';
import Balloon from '@pages/Balloon';

const AppRoutes: React.FunctionComponent = () => (
  <Layout>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/:balloonId' component={Balloon} />
    </Switch>
  </Layout>
);

export default AppRoutes;
