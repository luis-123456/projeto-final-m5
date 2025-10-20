import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo Economia Verde & Recursos Hídricos" />
      </div>
      <ul className={styles.navList}>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#dados">Dados</a></li>
        <li><a href="#diretrizes">Diretrizes</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
