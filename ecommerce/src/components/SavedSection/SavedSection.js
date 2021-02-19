import React from "react";

import styles from "./SavedSection.css";
import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";

const SavedSection = () => {
  return (
    <React.Fragment>
      <div className={styles.savedSection}>
        <NavComp style={{ display: "none" }} />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SavedSection;
