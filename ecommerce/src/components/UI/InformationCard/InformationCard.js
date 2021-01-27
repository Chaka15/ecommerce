import React, { useState } from "react";
import styles from "./InformationCard.css";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const InformationCard = (props) => {
  const [fav, setFav] = useState(false);

  return (
    <Card className={styles.informationCard}>
      <Card.Img variant="top" src={props.image} className={styles.img} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.instructions}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Vegetarian: {props.vegetarian}</ListGroupItem>
        <ListGroupItem>Vegan: {props.vegan}</ListGroupItem>
        <ListGroupItem>Gluten Free: {props.glutenFree}</ListGroupItem>
        <ListGroupItem>
          Preparation time: {props.preparationTime} minutes
        </ListGroupItem>
      </ListGroup>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FaHeart
          style={{ fontSize: "34px", cursor: "pointer" }}
          className={fav ? styles.green : styles.gray}
          onClick={() => {
            setFav(!fav);
          }}
        />
        <Card.Link
          href={props.sourceUrl}
          target="_blank"
          style={{ paddingTop: "10px" }}
        >
          Full description (steps included)
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default InformationCard;
