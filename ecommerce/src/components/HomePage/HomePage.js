import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes, setClicked } from "../../store/actions";
import { debounce } from "lodash";

import styles from "./HomePage.css";
import NavComp from "../UI/NavComp/NavComp";
import CardItem from "../UI/CardItem/CardItem";
import Spinner from "react-bootstrap/Spinner";
import Footer from "../UI//Footer/Footer";
import HomePageDiv from "../UI/HomePageDiv/HomePageDiv";
import FormComponent from "../UI/FormComponent/FormComponent";
import ErrorFetchPage from "../ErrorFetchPage/ErrorFetchPage";

const HomePage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const loading = useSelector((state) => state.loading);
  const clicked = useSelector((state) => state.clicked);
  const fetchError = useSelector((state) => state.fetchError);

  const [searchVal, setSearchVal] = useState("");
  const [likes, setLikes] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const inputRef = useRef();
  const handler = useCallback(debounce(setSearchVal, 1500), []);

  useEffect(() => {
    console.log("rendered");
    if (clicked && inputRef.current.value === searchVal) {
      dispatch(fetchRecipes(searchVal));
      return () => {
        handler.cancel();
      };
    }
  }, [clicked, searchVal, dispatch, inputRef, handler]);

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
  } else if (fetchError) {
    cards = <ErrorFetchPage error={fetchError} />;
  } else {
    if (likes) {
      let recipesCopy = recipes.slice();
      recipesCopy.sort((a, b) => (a.likes < b.likes ? 1 : -1));
      cards = recipesCopy.map((recipe) => {
        return (
          <CardItem
            recipe={recipe}
            img={recipe.image}
            title={recipe.title}
            id={recipe.id}
            key={recipe.id}
          />
        );
      });
    } else {
      cards = recipes.map((recipe) => {
        return (
          <CardItem
            recipe={recipe}
            img={recipe.image}
            title={recipe.title}
            id={recipe.id}
            key={recipe.id}
          />
        );
      });
    }
  }

  const onLikesHandler = () => {
    setLikes(!likes);
  };
  const handleClick = () => {
    if (disabled) {
      return;
    }
    setDisabled(true);
  };
  const enableBtn = () => {
    if (disabled) {
      setDisabled(false);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.main}>
        <NavComp
          ref={inputRef}
          onChange={(e) => {
            handler(e.target.value);
            enableBtn();
          }}
          onClick={() => {
            handleClick();
            dispatch(setClicked(clicked));
          }}
          disabled={disabled}
        />
        {cards.length === 0 || fetchError ? null : (
          <FormComponent checked={likes} onChange={onLikesHandler} />
        )}

        <div className={styles.cardContainer}>
          {cards.length === 0 ? <HomePageDiv /> : cards}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
