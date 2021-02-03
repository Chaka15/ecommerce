import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../../store/actions";
import Card from "react-bootstrap/Card";
import { FaTrash } from "react-icons/fa";
import styles from "./FavoriteCard.css";

const FavoriteCard = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favRecipes);
  const [clicked, setClicked] = useState(0);

  return (
    <Card
      className={styles.card}
      onAnimationEnd={() => setClicked(0)}
      clicked={clicked}
    >
      <Card.Img variant="top" src={props.image} className={styles.cardImg} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.likes === 1
            ? "Liked once by others."
            : `Liked ${props.likes} times by others.`}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ textAlign: "center" }}>
        <FaTrash
          className={styles.trash}
          onClick={() => {
            setClicked(1);
            dispatch(removeFromFavorites(favorites, props.id));
          }}
        />
      </Card.Footer>
    </Card>
  );
};

export default FavoriteCard;
