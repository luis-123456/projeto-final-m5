import React from "react";
import Menu from "./components/Menu/Menu.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Economia from "./components/EconomiaVerde/Economia.jsx";
import Recursos from "./components/RecursosHidricos/Recursos.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Menu />


      <section id="inicio">
        <Banner />
      </section>

     
     

      
      <section id="dados">
        <Economia />
        <Recursos />
      </section>

      
      <section id="diretrizes" className="diretrizes-section">
       <Footer/>
       </section>
    </>
  );
}

export default App;
