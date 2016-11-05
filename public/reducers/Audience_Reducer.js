import * as types from '../actions/ActionTypes';

const INITIAL_STATE = { userMember: {}, audience: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case types.JOIN_PRESENTATION_SUCCESS:
      return { ...state, userMember: action.payload };

    case types.UPDATE_AUDIENCE:
      return { ...state, audience: action.payload };

    default:
      return state;
  }
};
