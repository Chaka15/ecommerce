import React from "react";

import styles from "./FormComponent.css";
import Form from "react-bootstrap/Form";

const FormComponent = (props) => {
  return (
    <Form className={styles.formDiv}>
      <Form.Check
        type="switch"
        id="vegetarian-switch"
        label="Vegetarian"
        onChange={props.onChangeFirst}
        checked={props.checkedFirst}
      />
      <Form.Check
        type="switch"
        id="vegan-switch"
        label="Vegan"
        onChange={props.onChangeSecond}
        checked={props.checkedSecond}
      />
      <Form.Check
        type="switch"
        id="gluten-switch"
        label="Gluten Free"
        onChange={props.onChangeThird}
        checked={props.checkedThird}
      />
    </Form>
  );
};

export default FormComponent;
