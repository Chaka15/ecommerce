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
      <Card.Img
        variant="top"
        src={props.image}
        style={{ width: "170px", height: "115px" }}
      />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Liked {props.likes} times by others.</Card.Text>
      </Card.Body>
      <Card.Footer style={{ textAlign: "center" }}>
        <FaTrash
          className={styles.trash}
          onClick={() => {
            dispatch(removeFromFavorites(favorites, props.id));
            console.log(favorites);
          }}
        />
      </Card.Footer>
    </Card>
  );
};

export default FavoriteCard;
