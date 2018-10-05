import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  isAuth,
  component: Component,
  ...props
 }) => (
  <Route {...props} component={(props) => (
    isAuth ? (
      <div>
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = (state) => ({
  isAuth: !!(localStorage.getItem('uid')),
});

export default connect(mapStateToProps)(PrivateRoute);