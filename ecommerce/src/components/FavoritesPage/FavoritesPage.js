import React from "react";

import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";
import FavoriteCard from "../UI/FavoriteCard/FavoriteCard";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FavoritesPage.css";
import woman from "../../assets/woman.png";
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

  return (
    <React.Fragment>
      <div className={styles.main}>
        <NavComp style={{ display: "none" }} />
        {saveError && <ErrorFetchPage error={saveError.message} />}
        <div className={styles.favoritesDiv}>
          {favorites.length === 0 && !loading && !saveError ? (
            <div className={styles.empty}>
              <h2>It looks empty here.</h2>
              <img
                src={woman}
                alt="Keep the distance!"
                className={styles.emptyIcon}
              />
              <code className={styles.code}>distance: true; mask: true;</code>
              <h3>You should try adding items to this section!</h3>
            </div>
          ) : (
            favorites.map((favorite) => (
              <FavoriteCard
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
              onClick={() => {
                dispatch(saveFavs(savedFavs, favsObject, token));
                favorites.length = 0;
              }}
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
