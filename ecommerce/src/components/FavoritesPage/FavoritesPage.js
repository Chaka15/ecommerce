import React from "react";

import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";
import FavoriteCard from "../UI/FavoriteCard/FavoriteCard";
import EmptyFavoritesPage from "../EmptyFavoritesPage/EmptyFavoritesPage";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FavoritesPage.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ErrorFetchPage from "../ErrorFetchPage/ErrorFetchPage";
import { saveFavs } from "../../store/actions";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.favRecipes);
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);
  const savedFavs = useSelector((state) => state.saveFavs.savedFavs);
  const loading = useSelector((state) => state.saveFavs.loading);
  const saveError = useSelector((state) => state.saveFavs.saveError);
  const dispatch = useDispatch();

  const favsObject = {
    ...favorites,
    userId,
  };
  const saveFavorites = () => {
    dispatch(saveFavs(savedFavs, favsObject, token));
    favorites.length = 0;
  };
  // const checkForDuplicates = (arr1, arr2) => {
  //   dispatch(fetchFavs(token, userId));
  //   const favsIds = arr1.map((el) => el.id);
  //   const savedFavsids = arr2.map((el) => console.log(el));
  // };
  // checkForDuplicates(favorites, savedFavs);

  return (
    <React.Fragment>
      <div className={styles.main}>
        <NavComp style={{ display: "none" }} />
        {saveError && <ErrorFetchPage error={saveError.message} />}
        <div className={styles.favoritesDiv}>
          {favorites.length === 0 && !loading && !saveError ? (
            <EmptyFavoritesPage />
          ) : (
            favorites.map((favorite) => (
              <FavoriteCard
                key={favorite.id}
                image={favorite.image}
                title={favorite.title}
                id={favorite.id}
                likes={favorite.likes}
                aggregateLikes={favorite.aggregateLikes}
              />
            ))
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: "25px 0px",
          }}
        >
          {favorites.length === 0 ? null : (
            <Button
              variant="danger"
              className={styles.saveButton}
              disabled={token === null}
              onClick={saveFavorites}
            >
              Save your favorites
            </Button>
          )}
          {loading && (
            <Spinner
              animation="border"
              role="status"
              variant="light"
              className={styles.spinner}
            />
          )}
          {token === null && favorites.length !== 0 ? (
            <p style={{ paddingTop: "10px", color: "#f8f9fa" }}>
              Sign in in order to save your favorites!
            </p>
          ) : null}
          {token !== null && favorites.length !== 0 ? (
            <p
              style={{
                paddingTop: "10px",
                color: "#f8f9fa",
                textAlign: "center",
              }}
            >
              Only save favorites you want to see every time in your saved
              section when you log in!
            </p>
          ) : null}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default FavoritesPage;
