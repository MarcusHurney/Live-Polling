import * as types from './ActionTypes';

// connection actions
export const makeConnection = socket => {
  return {
    type: types.CONNECT,
    payload: socket
  };
};

export const disconnect = () => {
  return {
    type: types.DISCONNECT
  };
};

// audience actions
export const joinPresentationSuccess = userMember => {
  return {
    type: types.JOIN_PRESENTATION_SUCCESS,
    payload: userMember
  };
};

export const updateAudience = audience => {
  return {
    type: types.UPDATE_AUDIENCE,
    payload: audience
  };
};

// speaker actions
export const setTitle = title => {
  return {
    type: types.SET_PRESENTATION_TITLE,
    payload: title
  };
};

export const setSpeaker = speaker => {
  return {
    type: types.SET_SPEAKER,
    payload: speaker
  };
};
