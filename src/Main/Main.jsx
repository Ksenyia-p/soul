import React from "react";
import BestSellers from "./Bestsellers";
import About from "./About";
//import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <BestSellers />
      <About />
    </main>
  );
}

export default Main;
