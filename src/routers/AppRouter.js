import React from 'react';
import { Router, HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// import LoadingPage from '../components/LoadingPage';
import App from '../containers/App';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from '../containers/Dashboard';
import LandingPage from '../containers/LandingPage';

import PageNotFound from '../containers/PageNotFound';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LandingPage} exact={true} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PublicRoute component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;