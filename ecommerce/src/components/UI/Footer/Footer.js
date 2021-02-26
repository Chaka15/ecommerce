import React from "react";

import styles from "./Footer.css";
import { FaPhone, FaMailBulk, FaAddressCard, FaMap } from "react-icons/fa";
import Flag from "react-world-flags";
import BackToTop from "../BackToTop/BackToTop";

const Footer = React.memo(() => {
  return (
    <React.Fragment>
      <div className={styles.footer}>
        <section className={styles.firstContainer}>
          <h3 style={{ fontStyle: "italic" }}>CookIT</h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaPhone style={{ marginRight: "10px" }} />
            <a href="tel:067389786">+382 67 389 786</a>
          </div>
          <div>
            <FaMailBulk style={{ marginRight: "10px" }} />
            <a href="https://gmail.com" target="_blank" rel="noreferrer">
              cookit@gmail.com
            </a>
          </div>
        </section>
        <section className={styles.linksContainer}>
          <h4>Partners</h4>
          <a href="https://spoonacular.com/" target="_blank" rel="noreferrer">
            Spoonacular
          </a>
          <a
            href="https://www.coolinarika.com/"
            target="_blank"
            rel="noreferrer"
          >
            Coolinarka
          </a>
          <a href="https://radiokrs.com/" target="_blank" rel="noreferrer">
            Radio Krš
          </a>
        </section>
        <section className={styles.locationContainer}>
          <h4>Find us</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaAddressCard style={{ marginRight: "10px" }} />
            <span>Ul. Marka Miljanova 17</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaMap style={{ marginRight: "10px" }} />
            <span style={{ marginRight: "5px" }}>Podgorica, Montenegro</span>
            <Flag code="mne" fallback="" height="20" />
          </div>
        </section>
      </div>
      <div className={styles.lastDiv}>
        &copy; {new Date().getFullYear()} Created by:{" "}
        <a href="https://github.com/Chaka15" target="_blank" rel="noreferrer">
          Chaka15
        </a>
      </div>
      <BackToTop />
    </React.Fragment>
  );
});

export default Footer;
