import React from "react";

import styles from "./HomePage.css";
import Nav from "../UI/Nav/Nav";
import Cards from "../UI/Cards/Cards";

const HomePage = (props) => {
  return (
    <div className={styles.main}>
      <Nav />
      <Cards />
    </div>
  );
};

export default HomePage;
