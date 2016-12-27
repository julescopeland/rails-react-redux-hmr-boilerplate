import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/root';
import HomeApp from './containers/HomeApp';

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    createLogger(), 
    thunkMiddleware
  )
);

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={HomeApp} />
    </Router>
  </Provider>,
  document.getElementById('root')
);