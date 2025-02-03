import React from "react";
import searchIcon from "../../icons/search.svg";
import userIcon from "../../icons/user.svg";
import heartIcon from "../../icons/favorite.svg";
import basketIcon from "../../icons/shoping bag.svg";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li className={styles["menu-item"]}>
          <a href="#search" className={styles["icon-container"]}>
            <img
              src={searchIcon}
              alt="Пошук"
              className={`${styles.icon} ${styles["search-icon"]}`}
            />
          </a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="#account" className={styles["icon-container"]}>
            <img
              src={userIcon}
              alt="Особистий кабінет"
              className={`${styles.icon} ${styles["account-icon"]}`}
            />
          </a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="#favorites" className={styles["icon-container"]}>
            <img
              src={heartIcon}
              alt="Вішліст"
              className={`${styles.icon} ${styles["favorites-icon"]}`}
            />
          </a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="#basket" className={styles["icon-container"]}>
            <img
              src={basketIcon}
              alt="Кошик"
              className={`${styles.icon} ${styles["basket-icon"]}`}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
