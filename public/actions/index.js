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

export const updateCurrentAnswer = answer => {
  return {
    type: types.UPDATE_ANSWER,
    payload: answer
  };
};

export const updateResults = results => {
  return {
    type: types.UPDATE_RESULTS,
    payload: results
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

export const setQuestions = questions => {
  return {
    type: types.SET_QUESTIONS,
    payload: questions
  };
};

export const setCurrentQuestion = question => {
  return {
    type: types.SET_CURRENT_QUESTION,
    payload: question
  };
};
