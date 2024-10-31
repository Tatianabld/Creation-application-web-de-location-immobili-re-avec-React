import { useState, useEffect } from 'react'; // Importation des hooks pour gérer l'état et les effets dans le composant

const useFetch = (url) => {
  const [data, setData] = useState(null); // Stocke les données récupérées de l'API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); // Recupération des données avec fetch
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json(); // Conversion de la réponse en format JSON
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
