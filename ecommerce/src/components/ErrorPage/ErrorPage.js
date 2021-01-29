import React from "react";

import styles from "./ErrorPage.css";
import { Link } from "react-router-dom";
import { FaCarCrash } from "react-icons/fa";

const ErrorPage = () => (
  <div className={styles.container}>
    <h1>404</h1>
    <FaCarCrash className={styles.icon} />
    <h1>Page not found</h1>
    <Link to="/" className={styles.link}>
      Go back to Home Page!
    </Link>
  </div>
);

export default ErrorPage;
