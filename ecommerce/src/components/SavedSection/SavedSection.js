import React, { useEffect, useCallback } from "react";

import styles from "./SavedSection.css";
import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";
import ErrorFetchPage from "../ErrorFetchPage/ErrorFetchPage";
import Spinner from "react-bootstrap/Spinner";
import Figure from "react-bootstrap/Figure";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavs } from "../../store/actions";

const SavedSection = () => {
  const token = useSelector((state) => state.auth.token);
  const id = useSelector((state) => state.auth.userId);
  const fetchedFavs = useSelector((state) => state.saveFavs.fetchedFavs);
  const fetchError = useSelector((state) => state.saveFavs.fetchError);
  const fetchLoading = useSelector((state) => state.saveFavs.fetchLoading);
  const needToFetchFavs = useSelector(
    (state) => state.saveFavs.needToFetchFavs
  );
  const dispatch = useDispatch();
  const fetchFavsOptimized = useCallback(() => {
    dispatch(fetchFavs(token, id));
  }, [token, id, dispatch]);

  useEffect(() => {
    if (token && needToFetchFavs) {
      fetchFavsOptimized();
    }
  }, [fetchFavsOptimized, token, needToFetchFavs]);

  const displaySavedFavorites = () => {
    let fetchedFavsCopy = fetchedFavs.slice();
    let newFetchedFavs = [];
    fetchedFavsCopy.forEach((el) => {
      for (let property in el) {
        if (!isNaN(property)) {
          newFetchedFavs.push({
            data: el[property],
          });
        }
      }
    });
    const uniqueFetchedFavs = [
      ...newFetchedFavs
        .reduce((map, obj) => {
          console.log("hi");
          return map.set(obj.data.id, obj);
        }, new Map())
        .values(),
    ];
    return uniqueFetchedFavs.map((el) => (
      <Figure className={styles.figure} key={el.data.title}>
        <Figure.Image
          className={styles.figureImage}
          alt={el.data.title}
          src={el.data.image}
        />
        <Figure.Caption className={styles.figureCaption}>
          {`${el.data.title.slice(0, 15)}...`}
        </Figure.Caption>
      </Figure>
    ));
  };

  let saved;
  if (fetchedFavs.length === 0 && !fetchError && !fetchLoading) {
    saved = (
      <div className={styles.empty}>
        <h2>Here you will have all saved favorites</h2>
        <p>They are available every time you log in</p>
        <p>This way you don't lose your data and your favorite recipes</p>
      </div>
    );
  } else if (!fetchError && fetchedFavs.length !== 0) {
    saved = displaySavedFavorites();
  } else if (fetchError) {
    saved = <ErrorFetchPage error={fetchError.message} />;
  } else if (fetchLoading) {
    saved = (
      <Spinner
        animation="border"
        role="status"
        variant="light"
        className={styles.spinner}
      />
    );
  }

  return (
    <React.Fragment>
      <div className={styles.savedSection}>
        <NavComp style={{ display: "none" }} />
        <div className={styles.main}>{saved}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SavedSection;
