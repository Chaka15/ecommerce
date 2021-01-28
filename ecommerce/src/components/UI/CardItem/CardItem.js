import React, { useState } from "react";

import { withRouter } from "react-router";

import { Card, Button } from "react-bootstrap";
import { FaHeart, FaArrowDown } from "react-icons/fa";
import styles from "./CardItem.css";

const CardItem = (props) => {
  const [fav, setFav] = useState(false);

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={props.img} className={styles.cardImg} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          To find out more click the button below <FaArrowDown />
        </Card.Text>
        <FaHeart
          style={{ fontSize: "33px", cursor: "pointer", textAlign: "center" }}
          className={fav ? styles.green : styles.gray}
          onClick={() => {
            setFav(!fav);
          }}
        />
      </Card.Body>
      <Button
        variant="success"
        onClick={() => {
          props.history.push(`/${props.id}`);
        }}
      >
        More Info
      </Button>
    </Card>
  );
};

export default withRouter(CardItem);
