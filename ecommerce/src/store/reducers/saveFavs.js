import * as actionTypes from "../actions/actionTypes";

const initialState = {
  savedFavs: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_FAVS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SAVE_FAVS_SUCCESS:
      return {
        ...state,
        savedFavs: action.savedFavs,
        loading: false,
      };
    case actionTypes.SAVE_FAVS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
