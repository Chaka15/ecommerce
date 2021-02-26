import * as actionTypes from "../actions/actionTypes";

const initialState = {
  savedFavs: [],
  saveId: null,
  loading: false,
  saveError: false,
  fetchedFavs: [],
  fetchLoading: false,
  fetchError: false,
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
        saveId: action.saveId,
        loading: false,
      };
    case actionTypes.SAVE_FAVS_FAIL:
      return {
        ...state,
        loading: false,
        saveError: action.saveError,
      };
    case actionTypes.FETCH_FAVS_START:
      return {
        ...state,
        fetchLoading: true,
      };
    case actionTypes.FETCH_FAVS_SUCCESS:
      return {
        ...state,
        fetchedFavs: action.fetchedFavs,
        fetchLoading: false,
        fetchError: false,
      };
    case actionTypes.FETCH_FAVS_FAIL:
      return {
        ...state,
        fetchError: action.fetchError,
        fetchLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
