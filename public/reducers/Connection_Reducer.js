import * as types from '../actions/ActionTypes';

const INITIAL_STATE = { status: 'disconnected' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CONNECT:
      return { ...state, status: 'connected' };
    case types.DISCONNECT:
      return { ...state, status: 'disconnected' };
    default:
      return state;
  }
};
