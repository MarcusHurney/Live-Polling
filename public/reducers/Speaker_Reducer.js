import * as types from '../actions/ActionTypes';

const INITIAL_STATE = {
  title: 'Untitled Presentation',
  speaker: '',
  currentQuestion: false,
  questions: []
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case types.SET_PRESENTATION_TITLE:
      return { ...state, title: action.payload };

    case types.SET_SPEAKER:
      return { ...state, speaker: action.payload };

    case types.SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: action.payload };

    case types.SET_QUESTIONS:
      return { ...state, questions: action.payload };

    case types.DISCONNECT:
      return INITIAL_STATE; 

    default:
      return state;
  }
};
