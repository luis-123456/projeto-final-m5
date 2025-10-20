import React from "react";
import Menu from "./components/Menu/Menu.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Economia from "./components/EconomiaVerde/Economia.jsx";
import Recursos from "./components/RecursosHidricos/Recursos.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Menu />

      {/* INÍCIO */}
      <section id="inicio">
        <Banner />
      </section>

      {/* SOBRE */}
      <section id="sobre" className="sobre-section">
        <div className="sobre-container">
          <h2>Economia Verde</h2>
          <p>
            A Economia Verde é um modelo de desenvolvimento sustentável que busca equilibrar o crescimento econômico
            com a preservação ambiental e o bem-estar social. Diferente da economia tradicional, que prioriza o lucro
            acima de tudo, a economia verde propõe um sistema em que a produção, o consumo e as políticas públicas
            respeitam os limites do planeta.
          </p>
          <p>
            Entre seus principais objetivos estão a redução das emissões de carbono, o uso eficiente dos recursos
            naturais e o incentivo a fontes de energia renováveis. Ela também estimula a criação de empregos
            sustentáveis, conhecidos como “empregos verdes”, em setores como agricultura orgânica, reciclagem,
            energias limpas e construção sustentável.
          </p>
          <p>
            Adotar práticas de economia verde significa investir em um futuro mais equilibrado e saudável, onde o
            desenvolvimento humano caminha lado a lado com a conservação do meio ambiente — garantindo qualidade de vida
            para as gerações atuais e futuras.
          </p>

          <h2>Recursos Hídricos</h2>
          <p>
            Os recursos hídricos são os corpos de água doce e salgada que sustentam a vida na Terra — rios, lagos,
            aquíferos, mares e oceanos. Eles são essenciais para o abastecimento humano, a agricultura, a indústria e o
            equilíbrio dos ecossistemas. No entanto, o aumento do consumo, a poluição e as mudanças climáticas têm
            colocado em risco a disponibilidade e a qualidade da água no planeta.
          </p>
          <p>
            Cuidar dos recursos hídricos envolve práticas de gestão sustentável da água, como o uso racional, o tratamento
            adequado de esgotos, a recuperação de nascentes e matas ciliares, além da conscientização da população sobre
            o desperdício.
          </p>
          <p>
            Preservar a água é preservar a vida. Sem ela, não há produção de alimentos, energia ou equilíbrio ambiental.
            Garantir o acesso à água limpa e segura é um dos maiores desafios do século XXI — e também uma responsabilidade
            de todos nós.
          </p>
        </div>
      </section>

      {/* DADOS */}
      <section id="dados">
        <Economia />
        <Recursos />
      </section>

      {/* DIRETRIZES */}
      <section id="diretrizes" className="diretrizes-section">
        <h2>Diretrizes</h2>
        <p>As diretrizes e informações oficiais continuam aqui.</p>
      </section>
    </>
  );
}

export default App;
