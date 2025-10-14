import { useEffect, useState } from "react";
// 💡 A única linha alterada: importando de Economia.module.css
import styles from "./Economia.module.css"; 

function Economia() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://projeto-m4-main-luishenrique.onrender.com/economia-verde")
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
        console.error("Erro ao buscar dados da Economia Verde:", err);
        setError("Não foi possível carregar os dados de Economia Verde. Tente novamente mais tarde.");
        setData([]);
      });
  }, []);

  return (
    <main className={styles.main}>
      <h1>Dados sobre Economia Verde 🌱</h1>
      <div className={styles.container}>
        {error ? (
          <p className={styles.loading} style={{ color: 'red' }}>{error}</p>
        ) : data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className={styles.card}>
              <h2 className={styles.title}>{item.iniciativa || 'Nome Indisponível'}</h2>
              <p className={styles.description}>{item.impacto || 'Descrição Indisponível'}</p>
              {/* Supondo que a API retorne 'ano' e 'impacto' */}
              {item.ano && <p className={styles.year}>Ano: {item.ano}</p>}
              {item.impacto && <p className={styles.impact}>Impacto: {item.impacto}</p>}
            </div>
          ))
        ) : (
          <p className={styles.loading}>Carregando dados de Economia Verde...</p>
        )}
      </div>
    </main>
  );
}

export default Economia;