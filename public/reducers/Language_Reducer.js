import * as types from '../actions/ActionTypes';
const INITIAL_STATE = { languages: ['Python', 'Javascript', 'Java', 'C++', 'C#'] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.DELETE_LANGUAGE:
      let newLanguages = state.languages;
      newLanguages.splice(action.payload, 1);
      return { languages: newLanguages };

    default:
      return state;
  }
}
