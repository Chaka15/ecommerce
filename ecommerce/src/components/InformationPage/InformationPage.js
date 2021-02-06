import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

import NavComp from "../UI/NavComp/NavComp";
import styles from "./InformationPage.css";
import InformationCard from "../UI/InformationCard/InformationCard";
import ErrorFetchPage from "../ErrorFetchPage/ErrorFetchPage";
import Footer from "../UI/Footer/Footer";
import { FaCheckCircle } from "react-icons/fa";
import { FaBan } from "react-icons/fa";

const InformationPage = (props) => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [recipeInstructions, setRecipeInstructions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    console.log("render info");
    setLoading(true);
    fetch(
      `https://api.spoonacular.com/recipes/${props.location.pathname}/information?apiKey=ec39b7d20a314a2d8a7fcedca9b5b418`
    )
      .then((response) => response.json())
      .then((responseData) => {
        let newObject = JSON.parse(JSON.stringify(responseData));
        if (newObject.message) {
          props.history.push(`${props.location.pathname}/notfound`);
        }
        setRecipeInfo(newObject);

        if (newObject.instructions) {
          setRecipeInstructions(newObject.instructions);
        } else {
          setRecipeInstructions("");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [props.location.pathname, props.history]);

  return (
    <React.Fragment>
      <div className={styles.main}>
        <NavComp style={{ display: "none" }} />
        <div className={styles.cardContainer}>
          {error ? (
            <ErrorFetchPage error={error} />
          ) : (
            <InformationCard
              instructions={
                !loading
                  ? `${recipeInstructions.slice(
                      0,
                      100
                    )}... Click the link below for full description.`
                  : "Loading..."
              }
              image={recipeInfo.image}
              title={recipeInfo.title}
              vegetarian={
                recipeInfo.vegetarian ? (
                  <FaCheckCircle
                    style={{
                      fontSize: "25px",
                      color: "#28a745",
                      marginLeft: "10px",
                    }}
                  />
                ) : (
                  <FaBan
                    style={{
                      fontSize: "25px",
                      color: "red",
                      marginLeft: "10px",
                    }}
                  />
                )
              }
              vegan={
                recipeInfo.vegan ? (
                  <FaCheckCircle
                    style={{
                      fontSize: "25px",
                      color: "#28a745",
                      marginLeft: "10px",
                    }}
                  />
                ) : (
                  <FaBan
                    style={{
                      fontSize: "25px",
                      color: "red",
                      marginLeft: "10px",
                    }}
                  />
                )
              }
              glutenFree={
                recipeInfo.glutenFree ? (
                  <FaCheckCircle
                    onClick={() => {
                      // fetch(
                      //   `https://api.spoonacular.com/recipes/${props.location.pathname}/tasteWidget`
                      // );
                    }}
                    style={{
                      fontSize: "25px",
                      color: "#28a745",
                      marginLeft: "10px",
                    }}
                  />
                ) : (
                  <FaBan
                    style={{
                      fontSize: "25px",
                      color: "red",
                      marginLeft: "10px",
                    }}
                  />
                )
              }
              preparationTime={recipeInfo.readyInMinutes}
              sourceUrl={recipeInfo.sourceUrl}
              id={recipeInfo.id}
              recipeInfo={recipeInfo}
            />
          )}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(InformationPage);
