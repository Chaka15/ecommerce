import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
  loading: false,
  clicked: false,
  fetchError: false,
  favRecipes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.recipes,
        loading: false,
        clicked: false,
        fetchError: false,
      };
    case actionTypes.FETCH_RECIPES_FAIL:
      return {
        ...state,
        loading: false,
        clicked: false,
        fetchError: action.fetchError,
      };
    case actionTypes.SET_CLICKED:
      return {
        ...state,
        clicked: true,
      };
    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favRecipes: action.favRecipes,
      };
    case actionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favRecipes: action.favRecipes,
      };
    default:
      return state;
  }
};

export default reducer;
