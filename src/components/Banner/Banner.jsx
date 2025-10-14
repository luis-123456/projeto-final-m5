import React from "react";
import styles from "./Banner.module.css";
import img1 from "../../assets/water.png";  // substitua pelo caminho correto
import img2 from "../../assets/leaf.png";   // substitua pelo caminho correto

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1>Economia Verde & Recursos Hídricos</h1>
        <p>
          Bem-vindo ao nosso espaço dedicado à conscientização e prática da sustentabilidade! Aqui você encontrará informações essenciais sobre a gestão eficiente da água e as práticas de economia verde que ajudam a preservar o meio ambiente. 
          Entender como utilizar os recursos hídricos de forma responsável é fundamental para garantir um futuro equilibrado para o planeta e para as próximas gerações.
          Nosso objetivo é informar, inspirar e apresentar soluções reais que promovam o uso consciente da água, a redução do desperdício e a valorização de tecnologias e ações sustentáveis. 
          Junte-se a nós nessa jornada de aprendizado e transformação, explorando como pequenas mudanças podem gerar grandes impactos para um mundo mais verde e saudável.
        </p>
        <div className={styles.images}>
          <img src={img1} alt="Água" />
          <img src={img2} alt="Folha" />
        </div>
      </div>
    </section>
  );
};

export default Banner;