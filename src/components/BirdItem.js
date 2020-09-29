import React from "react";

//Styles
import styles from "../styles";

const BirdItem = (props) => {
  const { item } = props;

  return (
    <div style={styles.item}>
      <img style={styles.birdImage} src={item.image} alt={item.name} />
      <p style={styles.text}>{item.name}</p>
      <p style={styles.text}>{item.price} SAR</p>
    </div>
  );
};

export default BirdItem;
