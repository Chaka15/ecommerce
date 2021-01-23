import React from "react";

import classes from "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div className={classes.container}>
    <h1>404</h1>
    <h1>Page not found</h1>
    <Link to="/" className={classes.link}>
      Get back to Home Page!
    </Link>
  </div>
);

export default ErrorPage;
