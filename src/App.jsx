import React from "react";
import Recursos from './components/RecursosHidricos/Recursos.jsx';
import Economia from './components/EconomiaVerde/Economia.jsx';
import Menu from "./components/Menu/Menu.jsx";
import './App.css';

function App() {
  return (
    <>
      <Menu />

      <div id="inicio">
        <h1>Bem-vindo ao site!</h1>
        <p>Esta é a seção de início.</p>
      </div>

      <div id="sobre">
        <h2>Sobre</h2>
        <p>Informações sobre o site ou a empresa.</p>
      </div>

      <div id="economia-recursos">
        <Recursos />
        <Economia />
      </div>

      <div id="contato">
        <h2>Direitos Autorais</h2>
        <p>Formulário ou informações de contato.</p>
      </div>
    </>
  );
}

export default App;
