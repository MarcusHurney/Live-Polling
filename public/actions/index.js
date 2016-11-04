import * as types from './ActionTypes';

// connection actions
export const makeConnection = () => {
  return {
    type: types.CONNECT
  };
};

export const disconnect = () => {
  return {
    type: types.DISCONNECT
  };
};

// presenter actions

export const setTitle = title => {
  return {
    type: types.SET_PRESENTATION_TITLE,
    payload: title
  };
};
