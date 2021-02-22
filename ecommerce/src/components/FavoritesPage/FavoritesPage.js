import React from "react";

import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";
import FavoriteCard from "../UI/FavoriteCard/FavoriteCard";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FavoritesPage.css";
import woman from "../../assets/woman.png";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { saveFavs } from "../../store/actions";

const FavoritesPage = () => {
  let favorites = useSelector((state) => state.favorites.favRecipes);
  const token = useSelector((state) => state.auth.token);
  const savedFavs = useSelector((state) => state.saveFavs.savedFavs);
  const loading = useSelector((state) => state.saveFavs.loading);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className={styles.main}>
        <NavComp style={{ display: "none" }} />
        <div className={styles.favoritesDiv}>
          {favorites.length === 0 ? (
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
            alignItems: "center",
            padding: "25px 0px",
          }}
        >
          {favorites.length === 0 ? null : loading ? (
            <Spinner
              animation="border"
              role="status"
              variant="light"
              className={styles.spinner}
            />
          ) : (
            <Button
              variant="danger"
              className={styles.orderButton}
              onClick={() => {
                dispatch(saveFavs(savedFavs, favorites, token));
                favorites.length = 0;
              }}
            >
              Save your favorites
            </Button>
          )}
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default FavoritesPage;
