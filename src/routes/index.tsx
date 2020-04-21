import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Repository from '../pages/Repository';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/repository/:repository+" component={Repository} />
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
