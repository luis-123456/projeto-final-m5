import { useEffect, useState } from "react";
import styles from "./Recursos.module.css";

function Recursos() {
  const [climates, setClimates] = useState([]);

  useEffect(() => {
    fetch("https://projeto-m4-main-luishenrique.onrender.com/recursos-hidricos")
      .then((response) => response.json())
      .then((data) => setClimates(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <main className={styles.main}>
      <h1>Dados sobre Recursos Hídricos</h1>
      <div className={styles.container}>
      {climates.length > 0 ? (
        climates.map((item) => (
          <div key={item.id} className={styles.card}>
            <h2 className={styles.title}>{item.nome}</h2>
            <p className={styles.description}>{item.descricao}</p>
          </div>
        ))
      ) : (
        <p className={styles.loading}>Carregando dados hídricos...</p>
      )}
    </div>
    </main>
    
  );
}

export default Recursos;