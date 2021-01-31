import React, { useEffect } from "react";

import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";
import FavoriteCard from "../UI/FavoriteCard/FavoriteCard";
import { useSelector } from "react-redux";
import styles from "./FavoritesPage.css";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favRecipes);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <React.Fragment>
      <div className={styles.main}>
        <NavComp style={{ display: "none" }} />
        <div className={styles.favoritesDiv}>
          {favorites.map((favorite) => (
            <FavoriteCard
              image={favorite.image}
              title={favorite.title}
              likes={favorite.likes}
              id={favorite.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default FavoritesPage;
