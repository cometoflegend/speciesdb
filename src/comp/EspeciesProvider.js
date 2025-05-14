import React, { createContext, useState , useEffect, Children} from 'react';

export const EspeciesContext = createContext();

export const EspeciesProvider = ({ children }) => {

    const [especiesItems, setEspeciesItems] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);

    const addToEspecies = (item) => {
        setEspeciesItems([...especiesItems, item]);
      };

    const removeFromEspecies = (nombre) => {
        setEspeciesItems(especiesItems.filter(item => item.nombre !== nombre));
      };

    const cargarEspecies=(data)=>
        {
          const aux_data = [];
          let i= 0;
          for(i=0;i<data.length;i++)
          {
              let aux_element= data[i];
              aux_element["id"]=i;
              aux_data.push(aux_element);
          }

        setEspeciesItems(aux_data); 
      
    }

    const fetchEspecies = async () => {

        try {

            const response = await fetch('/especies.json');

            if (!response.ok) {

                throw new Error('Error al cargar los datos');

            }

            const data = await response.json();
            
            cargarEspecies(data);

        } catch (error) {

            setError(error);
            setLoad(false);

        }

    };

    useEffect(() => {
        fetchEspecies();
      }, []);

    return (
        <EspeciesContext.Provider value={{ especiesItems, addToEspecies, removeFromEspecies }}>
          {children}
        </EspeciesContext.Provider>
    );

};