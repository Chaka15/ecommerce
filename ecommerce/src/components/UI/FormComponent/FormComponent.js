import React from "react";

import styles from "./FormComponent.css";
import Form from "react-bootstrap/Form";

const FormComponent = (props) => {
  return (
    <Form className={styles.formDiv}>
      <Form.Check
        type="switch"
        id="likes-switch"
        label="Sort by likes (descending)"
        onChange={props.onChange}
        checked={props.checked}
      />
    </Form>
  );
};

export default FormComponent;
