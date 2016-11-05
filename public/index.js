import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(
    reducers,
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f )
  )}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app')
);
