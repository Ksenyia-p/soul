import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.heading}>
        SOUL — ЦЕ УКРАЇНСЬКИЙ <br />
        БРЕНД СПОРТИВНОГО ОДЯГУ
      </h1>
      <p className={styles.paragraph}>
        Основна мета, створювати якісний одяг для активних людей, що підкреслює
        індивідуальність
      </p>
      <button className={styles.learnMore} type="button">
        ЧИТАТИ ДАЛІ
      </button>
    </section>
  );
}

export default About;
