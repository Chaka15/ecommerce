import React from "react";

import styles from "./ErrorRecipeInfoPage.css";
import { FaCode } from "react-icons/fa";

const ErrorRecipeInfoPage = (props) => {
  return (
    <div className={styles.mainDiv}>
      <p>{props.error}!</p>
      <p>
        Please try again or contact our developer team <FaCode />
      </p>
    </div>
  );
};

export default ErrorRecipeInfoPage;
