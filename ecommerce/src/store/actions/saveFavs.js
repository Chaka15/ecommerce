import * as actionTypes from "./actionTypes";

export const saveFavsStart = () => {
  return {
    type: actionTypes.SAVE_FAVS_START,
  };
};
export const saveFavsSuccess = (saveId, savedFavs, savedFavObj) => {
  return {
    type: actionTypes.SAVE_FAVS_SUCCESS,
    saveId: saveId,
    savedFavs: savedFavs.concat(savedFavObj),
  };
};
export const saveFavsFail = (error) => {
  return {
    type: actionTypes.SAVE_FAVS_FAIL,
    error: error,
  };
};

export const saveFavs = (savedFavs, savedFavObj, token) => {
  return (dispatch) => {
    dispatch(saveFavsStart());
    fetch(
      "https://cookit-96a58-default-rtdb.firebaseio.com/favorites.json?auth=" +
        token,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(savedFav),
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(saveFavsSuccess(responseData, savedFavs, savedFavObj));
      })
      .catch((err) => {
        dispatch(saveFavsFail(err));
      });
  };
};
