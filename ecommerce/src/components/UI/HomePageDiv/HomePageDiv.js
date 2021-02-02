import React from "react";

import Card from "react-bootstrap/Card";
import styles from "./HomePageDiv.css";
import mainPic from "../../../assets/largepic.jpg";
import applePic from "../../../assets/apple.jpg";
import winePic from "../../../assets/wine.jpg";

const HomePageDiv = () => {
  return (
    <div className={styles.mainDiv}>
      <Card className={styles.card}>
        <Card.Img variant="top" src={mainPic} classNames={styles.img} />
        <Card.Body className={styles.cardBody}>
          <Card.Text>Search through our base of 10000+ recipes</Card.Text>
        </Card.Body>
      </Card>
      <Card className={styles.card}>
        <Card.Img variant="top" src={applePic} classNames={styles.img} />
        <Card.Body className={styles.cardBody}>
          <Card.Text>Pick Your favorites and mark them</Card.Text>
        </Card.Body>
      </Card>
      <Card className={styles.card}>
        <Card.Img variant="top" src={winePic} classNames={styles.img} />
        <Card.Body className={styles.cardBody}>
          <Card.Text>Cook the meals using our detailed recipes </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePageDiv;
