import React from "react";
import { withRouter } from "react-router";

import { Card, Button } from "react-bootstrap";
import { FaHeart, FaArrowDown } from "react-icons/fa";
import styles from "./CardItem.css";
import { addToFavorites, removeFromFavorites } from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const CardItem = (props) => {
  const favorites = useSelector((state) => state.favorites.favRecipes);
  const dispatch = useDispatch();

  const determineItem = (itemId) => {
    return favorites.some((favorite) => favorite.id === itemId);
  };

  return (
    <Card className={styles.card} recipe={props.recipe}>
      <Card.Img variant="top" src={props.img} className={styles.cardImg} />
      <Card.Body>
        <Card.Title style={{ minHeight: "75px" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          To find out more click the button below <FaArrowDown />
        </Card.Text>
        <FaHeart
          style={{ fontSize: "33px", cursor: "pointer", textAlign: "center" }}
          className={
            determineItem(props.recipe.id) ? styles.green : styles.gray
          }
          onClick={() => {
            if (!determineItem(props.recipe.id) && favorites.length <= 9) {
              dispatch(addToFavorites(favorites, props.recipe));
            } else if (determineItem(props.recipe.id)) {
              dispatch(removeFromFavorites(favorites, props.id));
            }
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
