import * as types from '../actions/ActionTypes';

const INITIAL_STATE = { status: 'disconnected', socket: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CONNECT:
      console.log(action.payload.id);
      return { ...state, status: 'connected', socket: action.payload };
    case types.DISCONNECT:
      return { ...state, status: 'disconnected', socket: {} };
    default:
      return state;
  }
};
