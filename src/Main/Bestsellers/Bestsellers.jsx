import React from "react";
import styles from "./Bestsellers.module.css";
import product1 from "../../images/photo 1.svg";
import product2 from "../../images/photo 2.svg";
import product3 from "../../images/photo 3.svg";
import product4 from "../../images/photo 4.svg";

function Bestsellers() {
  return (
    <section className={styles.bestsellers}>
      <div className={styles.titles}>
        <h2 className={styles.sectionTitleLeft}>BESTSELLERS</h2>
        <h2 className={styles.sectionTitleRight}>BESTSELLERS</h2>
      </div>

      <div className={styles.products}>
        <div className={styles.product}>
          <img
            src={product1}
            alt="Футболка OVERSIZED"
            className={styles.productImg}
          />
          <p className={styles.productName}>Футболка OVERSIZED</p>
          <p className={styles.productPrice}>750 UAH</p>
        </div>

        <div className={styles.product}>
          <img src={product2} alt="Рашгард" className={styles.productImg} />
          <p className={styles.productName}>Рашгард</p>
          <p className={styles.productPrice}>750 UAH</p>
        </div>

        <div className={styles.product}>
          <img
            src={product3}
            alt="Худі STANDARD"
            className={styles.productImg}
          />
          <p className={styles.productName}>Худі STANDART</p>
          <p className={styles.productPrice}>1350 UAH</p>
        </div>

        <div className={styles.product}>
          <img
            src={product4}
            alt="Худі STANDARD"
            className={styles.productImg}
          />
          <p className={styles.productName}>Жіночі штани</p>
          <p className={styles.productPrice}>1350 UAH</p>
        </div>
      </div>

      <div className={styles.viewAllButtonWrapper}>
        <button className={styles.viewAllButton}>ПЕРЕГЛЯНУТИ ВСЕ</button>
      </div>
    </section>
  );
}

export default Bestsellers;
