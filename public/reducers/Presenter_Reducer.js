import * as types from '../actions/ActionTypes';

const INITIAL_STATE = { title: 'Untitled Presentation' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_PRESENTATION_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};
