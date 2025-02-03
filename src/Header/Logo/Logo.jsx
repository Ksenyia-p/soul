import React from "react";
import logo from "../../icons/Logo soul.svg";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Логотип Soul" />
    </div>
  );
}

export default Logo;
