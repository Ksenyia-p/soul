import React from "react";
import menuIcon from "../../icons/menu.svg";
import "./HeaderButton.module.css";
const HeaderButton = () => {
  return (
    <div className="menu-button">
      <a href="#menu" className="menu-link">
        <img src={menuIcon} alt="Меню" className="menu-icon" />
      </a>
    </div>
  );
};

export default HeaderButton;
