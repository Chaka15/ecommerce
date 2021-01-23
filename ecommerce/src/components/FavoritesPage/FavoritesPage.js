import React from "react";

import NavComp from "../UI/NavComp/NavComp";
import styles from "./FavoritesPage.css";

const FavoritesPage = () => {
  return (
    <div className={styles.main}>
      <NavComp style={{ display: "none" }} />
    </div>
  );
};

export default FavoritesPage;
