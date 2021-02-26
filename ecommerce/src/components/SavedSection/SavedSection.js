import React, { useEffect } from "react";

import styles from "./SavedSection.css";
import NavComp from "../UI/NavComp/NavComp";
import Footer from "../UI/Footer/Footer";
import ErrorFetchPage from "../ErrorFetchPage/ErrorFetchPage";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavs } from "../../store/actions";

const SavedSection = () => {
  const token = useSelector((state) => state.auth.token);
  const id = useSelector((state) => state.auth.userId);
  const fetchedFavs = useSelector((state) => state.saveFavs.fetchedFavs);
  const fetchError = useSelector((state) => state.saveFavs.fetchError);
  const fetchLoading = useSelector((state) => state.saveFavs.fetchLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchFavs(token, id));
    }
  }, [dispatch, token, id, fetchFavs]);

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
    saved = <p>radi</p>;
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
        {saved}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SavedSection;
