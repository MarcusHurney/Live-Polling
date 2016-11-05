import * as types from '../actions/ActionTypes';

const INITIAL_STATE = { title: 'Untitled Presentation', speaker: '' };

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case types.SET_PRESENTATION_TITLE:
      return { ...state, title: action.payload };
    case types.SET_SPEAKER:
      return { ...state, speaker: action.payload };
    default:
      return state;
  }
};
