import React, { useState } from "react";

import styles from "./Auth.css";
import { Form, Button } from "react-bootstrap";
import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../store/actions";
import Spinner from "react-bootstrap/Spinner";
import ErrorFetchPage from "../ErrorFetchPage/ErrorFetchPage";
import { Redirect } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmedError, setPasswordConfirmedError] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const isAuth = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const emailHandler = (event) => {
    let emailVal = event.target.value;
    setEmail(emailVal);
  };
  const passwordHandler = (event) => {
    let passwordVal = event.target.value;
    setPassword(passwordVal);
  };
  const passwordConfirmedHandler = (event) => {
    let passwordConfirmedVal = event.target.value;
    setPasswordConfirmed(passwordConfirmedVal);
  };

  const validate = () => {
    let emailErr = "";
    let passwordErr = "";
    let passwordConfirmedErr = "";

    if (!(password.length >= 6 && password.match(/\d/))) {
      passwordErr =
        "Password should be at least 6 characters long and contain one number";
    }
    if (!/\S+@\S+\.\S+/.test(String(email))) {
      emailErr = "Invalid email";
    }
    if (isSignUp && passwordConfirmed !== password) {
      passwordConfirmedErr = "Your passwords do not match";
    }
    if (emailErr || passwordErr || passwordConfirmedErr) {
      setEmailError(emailErr);
      setPasswordError(passwordErr);
      setPasswordConfirmedError(passwordConfirmedErr);
      return false;
    }
    return true;
  };

  const initialState = () => {
    setEmail("");
    setPassword("");
    setPasswordConfirmed("");
    setEmailError("");
    setPasswordError("");
    setPasswordConfirmedError("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const isValid = validate();

    if (isValid) {
      initialState();
      dispatch(auth(email, password, isSignUp));
    }
  };

  const switchAuthModeHandler = () => {
    setIsSignUp(!isSignUp);
    initialState();
  };
  let redirect = null;
  if (isAuth) {
    redirect = <Redirect to="/" />;
  }

  let form = (
    <Form className={styles.form} onSubmit={submitHandler}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          type="email"
          placeholder="Enter email"
          onChange={emailHandler}
        />
        <p style={{ color: "whitesmoke" }}>{emailError}</p>
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
        />
        <p style={{ color: "whitesmoke" }}>{passwordError}</p>
        <p style={{ color: "whitesmoke" }}>{error}</p>
      </Form.Group>
      {isSignUp ? (
        <Form.Group controlId="formGroupPasswordConfirmed">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={passwordConfirmed}
            type="password"
            placeholder=" Confirm Password"
            onChange={passwordConfirmedHandler}
          />
          <p style={{ color: "whitesmoke" }}>{passwordConfirmedError}</p>
        </Form.Group>
      ) : null}

      <Button variant="warning" type="submit">
        {isSignUp ? "Sign up" : "Sign in"}
      </Button>
      <Button
        variant="danger"
        onClick={switchAuthModeHandler}
        className={styles.button}
      >
        Switch to {isSignUp ? "Sign in" : "Sign up"}
      </Button>
    </Form>
  );
  if (loading && !error) {
    form = (
      <Spinner
        animation="border"
        role="status"
        variant="light"
        className={styles.spinner}
      />
    );
  }
  //  else if (error) {
  //   form = <ErrorFetchPage error={error} />;
  // }

  return (
    <React.Fragment>
      <NavComp style={{ display: "none" }} />
      {redirect}
      <div className={styles.main}>{form}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Auth;
