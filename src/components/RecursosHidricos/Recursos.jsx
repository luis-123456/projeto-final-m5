import { useEffect, useState } from "react";
import styles from "./Recursos.module.css";

function Recursos() {
  // Alterado 'climates' para 'data' para maior clareza
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://projeto-m4-main-luishenrique.onrender.com/recursos-hidricos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((apiData) => {
        setData(apiData);
        setError(null);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
        setError("Não foi possível carregar os dados. Tente novamente mais tarde.");
        setData([]);
      });
  }, []);

  return (
    <main className={styles.main}>
      <h1>Dados sobre Recursos Hídricos 💧</h1>
      <div className={styles.container}>
        {error ? (
          <p className={styles.loading} style={{ color: 'red' }}>{error}</p>
        ) : data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className={styles.card}>
              <h2 className={styles.title}>{item.nome || 'Nome Indisponível'}</h2>
              <p className={styles.description}>{item.descricao || 'Descrição Indisponível'}</p>
              {/* Adicionando campos para demonstrar o uso das classes .year e .impact (ajuste conforme sua API) */}
              {item.ano && <p className={styles.year}>Ano: {item.ano}</p>}
              {item.impacto && <p className={styles.impact}>Impacto: {item.impacto}</p>}
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