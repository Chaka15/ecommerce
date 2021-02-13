import React from "react";

import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";
import FavoriteCard from "../UI/FavoriteCard/FavoriteCard";
import { useSelector } from "react-redux";
import styles from "./FavoritesPage.css";
import woman from "../../assets/woman.png";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.favRecipes);

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
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default FavoritesPage;
