import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../../store/actions";
import Card from "react-bootstrap/Card";
import { FaTrash } from "react-icons/fa";
import styles from "./FavoriteCard.css";

const FavoriteCard = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favRecipes);

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={props.image} className={styles.cardImg} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.likes
            ? props.likes === 1
              ? `Liked ${props.likes} time by others`
              : `Liked ${props.likes} times by others.`
            : props.aggregateLikes
            ? props.aggregateLikes === 1
              ? `Liked ${props.aggregateLikes} time by others`
              : `Liked ${props.aggregateLikes} times by others.`
            : `No likes`}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ textAlign: "center" }}>
        <FaTrash
          className={styles.trash}
          onClick={() => {
            dispatch(removeFromFavorites(favorites, props.id));
          }}
        />
      </Card.Footer>
    </Card>
  );
};

export default FavoriteCard;
