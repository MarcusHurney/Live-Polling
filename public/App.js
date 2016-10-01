import React from 'react';
import ReactDOM from 'react-dom';

// import redux methods
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import root reducer, since the file is named index.js, we dont' need
// to specify its name in the import statement
import reducers from './reducers';

//import components
import Greet from './components/Greet';

const App = () => (
  <Provider store={createStore(reducers)}>
    <Greet />
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('app'));
