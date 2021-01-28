import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes, setClicked } from "../../store/actions/index";

import styles from "./HomePage.css";
import NavComp from "../UI/NavComp/NavComp";
import CardItem from "../UI/CardItem/CardItem";
import Spinner from "react-bootstrap/Spinner";

const HomePage = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const loading = useSelector((state) => state.loading);
  const clicked = useSelector((state) => state.clicked);

  useEffect(() => {
    console.log("Component rendered");
    if (clicked) {
      dispatch(fetchRecipes(searchVal));
    }
  }, [clicked, searchVal, dispatch]);

  let cards;
  if (loading) {
    cards = (
      <Spinner
        animation="border"
        role="status"
        variant="light"
        className={styles.spinner}
      />
    );
  } else {
    cards = recipes.map((recipe) => {
      return (
        <CardItem
          img={recipe.image}
          title={recipe.title}
          id={recipe.id}
          key={recipe.id}
        />
      );
    });
  }

  return (
    <div className={styles.main}>
      <NavComp
        onChange={(e) =>
          setTimeout(() => {
            setSearchVal(e.target.value);
          }, 1000)
        }
        onClick={() => {
          dispatch(setClicked(clicked));
        }}
      />
      <div className={styles.cardContainer}>{cards}</div>
    </div>
  );
};

export default HomePage;
