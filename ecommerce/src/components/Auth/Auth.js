import React, { useState } from "react";

import styles from "./Auth.css";
import { Form, Button } from "react-bootstrap";
import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";

const Auth = () => {
  const [email, SetEmail] = useState();
  const [password, Setpassword] = useState();

  return (
    <React.Fragment>
      <NavComp />
      <div className={styles.main}>
        <Form className={styles.form}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                Setpassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="warning">Submit</Button>
        </Form>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Auth;
