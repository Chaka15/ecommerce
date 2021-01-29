import React from "react";

import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";
import styles from "./FavoritesPage.css";

const FavoritesPage = () => {
  return (
    <React.Fragment>
      <div className={styles.main}>
        <NavComp style={{ display: "none" }} />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default FavoritesPage;
