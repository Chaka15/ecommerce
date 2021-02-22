import React, { useEffect } from "react";

import styles from "./SavedSection.css";
import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";
import { useSelector } from "react-redux";

const SavedSection = () => {
  const savedFavs = useSelector((state) => state.saveFavs.savedFavs);

  useEffect(() => {
    console.log(savedFavs);
  }, [savedFavs]);

  return (
    <React.Fragment>
      <div className={styles.savedSection}>
        <NavComp style={{ display: "none" }} />
        <div className={styles.savedFavs}></div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SavedSection;
