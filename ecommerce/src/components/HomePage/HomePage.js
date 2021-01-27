import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../../store/actions/index";

import styles from "./HomePage.css";
import NavComp from "../UI/NavComp/NavComp";
import CardItem from "../UI/CardItem/CardItem";
import Spinner from "react-bootstrap/Spinner";

const HomePage = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchRecipes("strawberry"));
  }, []);

  let cards;
  {
    loading
      ? (cards = (
          <Spinner
            animation="border"
            role="status"
            variant="light"
            className={styles.spinner}
          />
        ))
      : (cards = recipes.map((recipe) => {
          return (
            <CardItem
              img={recipe.image}
              title={recipe.title}
              id={recipe.id}
              key={recipe.id}
            />
          );
        }));
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
          setClicked(true);
        }}
      />
      <div className={styles.cardContainer}>{cards}</div>
    </div>
  );
};

export default HomePage;
