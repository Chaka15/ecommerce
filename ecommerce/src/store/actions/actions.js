import * as actionTypes from "./actionTypes";

export const fetchRecipesStart = () => {
  return {
    type: actionTypes.FETCH_RECIPES_START,
  };
};
export const fetchRecipesSuccess = (recipes) => {
  return {
    type: actionTypes.FETCH_RECIPES_SUCCESS,
    recipes: recipes,
  };
};
export const fetchRecipesFail = (error) => {
  return {
    type: actionTypes.FETCH_RECIPES_FAIL,
    error: error,
  };
};

export const setFavorites = (favRecipes) => {
  return {
    type: actionTypes.SET_FAVORITES,
    favRecipes: favRecipes,
  };
};

export const fetchRecipes = (searchValue) => {
  return (dispatch) => {
    dispatch(fetchRecipesStart());
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=ec39b7d20a314a2d8a7fcedca9b5b418&ingredients=${searchValue}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        const fetchedRecipes = [];
        for (let key in responseData) {
          fetchedRecipes.push({
            ...responseData[key],
          });
        }
        dispatch(fetchRecipesSuccess(fetchedRecipes));
      })
      .catch((err) => {
        dispatch(fetchRecipesFail(err));
      });
  };
};
