import React from "react";
import logoTwoStars from "../icons/Vector.png";
import telegramIcon from "../icons/telegram.svg";
import tikTokIcon from "../icons/tik-tok.svg";
import instagramIcon from "../icons/instagram.svg";
import styles from "./Footer.module.css"; // Імпортуємо модуль стилів

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img
            src={logoTwoStars}
            alt="menu"
            className={styles.footerLogoIcon}
          />
        </div>
        <div className={styles.footerLeft}>
          <div className={styles.footerItem}>
            <p>Про нас</p>
          </div>
          <div className={styles.footerItem}>
            <p>Розмірна сітка</p>
          </div>
          <div className={styles.footerItem}>
            <p>Догляд за одягом</p>
          </div>
        </div>
        <div className={styles.footerCenter}>
          <div className={styles.footerItem}>
            <p>Новини</p>
          </div>
          <div className={styles.footerItem}>
            <p>Повернення та обмін</p>
          </div>
          <div className={styles.footerItem}>
            <p>Договір публічної оферти</p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <p>Контакти</p>
          <div className={styles.footerIcons}>
            <a href="#telegram">
              <img src={telegramIcon} alt="Telegram" />
            </a>
            <a href="#tik-tok">
              <img src={tikTokIcon} alt="TikTok" />
            </a>
            <a href="#instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.footerBottom}>
        ©2025 — Інтернет магазин спортивного одягу
      </p>
    </footer>
  );
}

export default Footer;
