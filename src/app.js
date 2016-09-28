import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import * as reducers from 'redux/reducers';

const reducers = combineReducers({
  ...reducers
});

export const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <Router routes={require('./routes')}/>
  </Provider>, document.getElementById('app')
);
