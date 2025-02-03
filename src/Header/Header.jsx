import React from "react";
import Logo from "./Logo";
import MenuButton from "./HeaderButton";
import Menu from "./Menu";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      {}
      <div className={styles.menuButton}>
        <MenuButton />
      </div>

      {}
      <div className={styles.logo}>
        <Logo />
      </div>

      {}
      <div className={styles.menu}>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
