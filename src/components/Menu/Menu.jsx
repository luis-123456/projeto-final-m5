import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>MeuSite</div>
      <ul className={styles.navList}>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Menu;