import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from '../src/store/configureStore';
import { firebase } from './firebase/firebase';

import { logout } from './state/auth/actions';

import './style/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const LoadingPage = () => {
  return (
    <div>
    loading...
    </div>
  )
};

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDom.render(jsx, document.getElementById("root"))
    hasRendered = true;
  }
}

ReactDom.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
})

renderApp();