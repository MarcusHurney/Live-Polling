import * as types from '../actions/ActionTypes';

const INITIAL_STATE = {
  userMember: {},
  audience: [],
  currentAnswer: '',
  results: {a: 0, b: 0, c: 0, d: 0}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.JOIN_PRESENTATION_SUCCESS:
      return { ...state, userMember: action.payload };

    case types.UPDATE_AUDIENCE:
      return { ...state, audience: action.payload };

    case types.UPDATE_ANSWER:
      return { ...state, currentAnswer: action.payload };

    case types.UPDATE_RESULTS:
      return { ...state, results: action.payload };

    default:
      return state;
  }
};
