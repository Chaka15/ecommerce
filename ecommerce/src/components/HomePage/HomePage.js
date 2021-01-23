import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../../store/actions/index";

import styles from "./HomePage.css";
import NavComp from "../UI/NavComp/NavComp";
import CardItem from "../UI/CardItem/CardItem";

const HomePage = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchRecipes("apples"));
    console.log(recipes);
  }, []);

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
      <div className={styles.cardContainer}>
        {recipes.map((recipe) => {
          return <CardItem img={recipe.img} title={recipe.title} />;
        })}
        <CardItem />
      </div>
    </div>
  );
};

export default HomePage;
