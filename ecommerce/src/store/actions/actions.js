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
export const setClicked = (clicked) => {
  return {
    type: actionTypes.SET_CLICKED,
    clicked: clicked,
  };
};

export const addToFavorites = (favRecipes, recipe) => {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    favRecipes: favRecipes.concat(recipe),
  };
};
export const removeFromFavorites = (favRecipes, recipeId) => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES,
    favRecipes: favRecipes.filter((recipe) => recipe.id !== recipeId),
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
