import {  createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import middleware from '../state/middleware';
import authReducer from '../state/auth/reducers';

export default () => {
  const store = createStore(
    combineReducers({ authReducer }),
    applyMiddleware( middleware.reporter, thunk),
  );
  return store;
}