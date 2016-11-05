// index.js will serve as the root reducer for our redux app
// combineReducers allows you to create multiple reducers and pass
// them to the app's store
import { combineReducers } from 'redux';
import connection from './Connection_Reducer';
import speaker from './Speaker_Reducer';
import audience from './Audience_Reducer';

export default combineReducers({
  connection,
  speaker,
  audience
});
