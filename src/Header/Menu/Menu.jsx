import React, { useState, useEffect } from "react";
import searchIcon from "../../icons/search.svg";
import userIcon from "../../icons/user.svg";
import heartIcon from "../../icons/favorite.svg";
import basketIcon from "../../icons/shoping bag.svg";
import closeIcon from "../../icons/cross.svg";
import styles from "./Menu.module.css";

function Menu() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = (e) => {
    e.preventDefault();
    setIsSearchVisible(!isSearchVisible);
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
  };

  useEffect(() => {
    if (isSearchVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearchVisible]);

  return (
    <nav className={styles.menu}>
      <ul>
        <li className={styles["menu-item"]}>
          <a
            href="#search"
            className={styles["icon-container"]}
            onClick={toggleSearch}
          >
            <img
              src={searchIcon}
              alt="Пошук"
              className={`${styles.icon} ${styles["search-icon"]}`}
            />
          </a>

          {}
          <div
            className={`${styles["search-bar"]} ${
              isSearchVisible ? styles.visible : styles.hidden
            }`}
          >
            <input
              type="text"
              placeholder="Пошук"
              className={styles["search-input"]}
            />
            <button className={styles["close-button"]} onClick={closeSearch}>
              <img
                src={closeIcon}
                alt="Закрити"
                className={styles["close-icon"]}
              />
            </button>
          </div>
          <div
            className={`${styles["search-overlay"]} ${
              isSearchVisible ? styles.visible : ""
            }`}
          ></div>
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
