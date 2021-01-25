import React, { useState } from "react";

import { withRouter } from "react-router";

import { Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import styles from "./CardItem.css";

const CardItem = (props) => {
  const [fav, setFav] = useState(false);

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Click the button down for more info</Card.Text>
        <FaHeart
          style={{ fontSize: "33px", cursor: "pointer" }}
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
