import React, { createContext, useState, useEffect } from 'react';

export const EspeciesContext = createContext();

export const EspeciesProvider = ({ children }) => {
  const [especiesItems, setEspeciesItems] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  const LOCAL_KEY = 'especiesData';

  const addToEspecies = (item) => {
    const newEsp = [...especiesItems, item];
    setEspeciesItems(newEsp);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newEsp));
  };

  const removeFromEspecies = (nombre) => {
    const newEsp = especiesItems.filter(item => item.nombre !== nombre);
    setEspeciesItems(newEsp);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newEsp));
  };

  const fetchEspecies = async () => {
    try {
      const stored = localStorage.getItem(LOCAL_KEY);

      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.length > 0) {
          setEspeciesItems(parsed);
          setLoad(false);
          return;
        }
      }

      const response = await fetch('/especies.json');
      if (!response.ok) {
        throw new Error('Error al cargar los datos');
      }

      const data = await response.json();
      setEspeciesItems(data);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(data));

    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoad(false);
    }
  };

useEffect(() => {
  fetchEspecies();
}, []);

return (
  <EspeciesContext.Provider value={{ especiesItems, addToEspecies, removeFromEspecies, load, error }}>
    {children}
  </EspeciesContext.Provider>
);
};
