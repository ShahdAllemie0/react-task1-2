import React from "react";
import "./App.css";
import items from "./items";
import styles from "./styles";

function App() {
  const itemList = items.map((item) => (
    <div style={styles.item} key={item.id}>
      <img style={styles.birdImage} src={item.image} alt={item.name} />
      <p style={styles.text}>{item.name}</p>
      <p style={styles.text}>{item.price} SAR</p>
    </div>
  ));
  return (
    <div style={styles.body}>
      <h1 style={styles.text}>
        If and only if you are intersting to birds stuff
      </h1>
      <p style={styles.text}>then</p>
      <h3 style={styles.text}>
        Welcome to <b>SHAHD</b> shop ..
      </h3>
      <div style={styles.list}>{itemList}</div>
    </div>
  );
}

export default App;
