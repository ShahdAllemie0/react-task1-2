import React from "react";

//Data
import item from "../items";

//Styles
import styles from "../styles";

//Item
import BirdItem from "./BirdItem";

const BirdList = () => {
  let birdList = item.map((item) => <BirdItem item={item} key={item.name} />);
  return (
    <div>
      <h1 style={styles.text}>We have the following birds:</h1>
      <div style={styles.list}>{birdList}</div>
    </div>
  );
};

export default BirdList;
