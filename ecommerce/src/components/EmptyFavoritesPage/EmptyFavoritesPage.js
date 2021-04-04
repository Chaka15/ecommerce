import React from "react";

import woman from "../../assets/woman.png";
import styles from "./EmptyFavoritesPage.css";

const EmptyFavoritesPage = () => (
  <div className={styles.empty}>
    <h2>It looks empty here.</h2>
    <img src={woman} alt="Keep the distance!" className={styles.emptyIcon} />
    <code className={styles.code}>distance: true; mask: true;</code>
    <h3>You should try adding items to this section!</h3>
  </div>
);

export default EmptyFavoritesPage;
