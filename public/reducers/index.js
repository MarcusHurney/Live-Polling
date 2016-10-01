// index.js will serve as the root reducer for our redux app
// combineReducers allows you to create multiple reducers and pass
// them to the app's store
import { combineReducers } from 'redux';
import languages from './Language_Reducer';

export default combineReducers({
  languages: languages
});
