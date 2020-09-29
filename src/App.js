import React from "react";
import "./App.css";
import styles from "./styles";
import BirdList from "./components/BirdList";
import Header from "./components/Header";

function App() {
  return (
    <div style={styles.body}>
      <Header />
      <BirdList />
    </div>
  );
}

export default App;
