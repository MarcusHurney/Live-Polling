import * as types from './ActionTypes';

export const deleteLanguage = (languageIndex) => {
  return {
    type: types.DELETE_LANGUAGE,
    payload: languageIndex
  };
}
