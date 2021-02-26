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
    saveError: error,
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
        body: JSON.stringify(savedFavObj),
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(saveFavsSuccess(responseData.name, savedFavs, savedFavObj));
      })
      .catch((err) => {
        dispatch(saveFavsFail(err));
      });
  };
};

export const fetchFavsStart = () => {
  return {
    type: actionTypes.FETCH_FAVS_START,
  };
};
export const fetchFavsSuccess = (fetchedFavs) => {
  return {
    type: actionTypes.FETCH_FAVS_SUCCESS,
    fetchedFavs: fetchedFavs,
  };
};
export const fetchFavsFail = (error) => {
  return {
    type: actionTypes.FETCH_FAVS_FAIL,
    fetchError: error,
  };
};

export const fetchFavs = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchFavsStart());

    const queryParams =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    fetch(
      "https://cookit-96a58-default-rtdb.firebaseio.com/favorites.json" +
        queryParams
    )
      .then((response) => response.json())
      .then((responseData) => {
        const fetchedFavorites = [];
        for (let key in responseData) {
          fetchedFavorites.push({
            ...responseData[key],
            id: key,
          });
        }
        console.log(fetchedFavorites);
        dispatch(fetchFavsSuccess(fetchedFavorites));
      })
      .catch((err) => {
        dispatch(fetchFavsFail(err));
      });
  };
};
