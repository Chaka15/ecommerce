import React from "react";

import styles from "./Graph.css";

const Graph = (props) => (
  <div
    className={styles.graph}
    dangerouslySetInnerHTML={{ __html: props.HTML }}
  ></div>
);

export default Graph;
