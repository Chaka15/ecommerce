import React from "react";

import { Card, Button } from "react-bootstrap";

const CardItem = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Kartica</Card.Text>
        <Button variant="primary">Like</Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
