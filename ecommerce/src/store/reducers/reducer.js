import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
  loading: false,
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
      };
    case actionTypes.FETCH_RECIPES_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.SET_FAVORITES:
      return {
        ...state,
        favRecipes: action.favRecipes,
      };
    default:
      return state;
  }
};

export default reducer;
