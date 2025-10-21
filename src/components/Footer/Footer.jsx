import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h3>Projeto Sustentabilidade</h3>
        <p>
          Promovendo a conscientização sobre Economia Verde e Recursos Hídricos
          para um futuro mais equilibrado e responsável.
        </p>
      </div>

      <div className={styles.refs}>
        <p>
          <strong>Fontes:</strong> ONU Meio Ambiente, Ministério do Meio
          Ambiente, Agência Nacional de Águas (ANA)
        </p>
      </div>

      <div className={styles.copy}>
        <p>© 2025 Projeto Sustentabilidade. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
