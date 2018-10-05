import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuth,
  component: Component,
  ...props
}) => (
  <Route {...props} component={(props) => (
    isAuth ? (
      <Redirect to="/dashboard" />
    ) : (
      <Component {...props} />
    )
  )} />
);

const mapStateToProps = (state) => ({
  isAuth: !!(localStorage.getItem('uid'))
});

export default connect(mapStateToProps)(PublicRoute);