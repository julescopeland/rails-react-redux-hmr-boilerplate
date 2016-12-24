import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import rootReducer from './reducers/root'

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    createLogger()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <h1>React Redux App</h1>
  </Provider>,
  document.getElementById('root')
);