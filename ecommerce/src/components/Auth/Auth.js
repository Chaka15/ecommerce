import React, { useState } from "react";

import styles from "./Auth.css";
import { Form, Button } from "react-bootstrap";
import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState();

  const emailHandler = (event) => {
    let emailVal = event.target.value;
    setEmail(emailVal);
  };
  const passwordHandler = (event) => {
    let passwordVal = event.target.value;
    setPassword(passwordVal);
  };

  const validate = () => {
    let emailErr = "";
    let passwordErr = "";

    if (!(password.length >= 6 && password.match(/\d/))) {
      passwordErr =
        "Password should be at least 6 characters long and contain one number";
    }
    if (!/\S+@\S+\.\S+/.test(String(email))) {
      emailErr = "Invalid email";
    }
    if (emailErr || passwordErr) {
      setEmailError(emailErr);
      setPasswordError(passwordErr);
      return false;
    }
    return true;
  };

  const initialState = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const isValid = validate();

    if (isValid) {
      console.log(email, password);
      initialState();
    }
  };

  return (
    <React.Fragment>
      <NavComp />
      <div className={styles.main}>
        <Form className={styles.form} onSubmit={submitHandler}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              type="email"
              placeholder="Enter email"
              onChange={emailHandler}
            />
            <p style={{ color: "red" }}>{emailError}</p>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type="password"
              placeholder="Password"
              onChange={passwordHandler}
            />
            <p style={{ color: "red" }}>{passwordError}</p>
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Auth;
