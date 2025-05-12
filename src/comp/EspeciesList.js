import React, { useState , useEffect} from 'react';

const EspeciesList = () => {

    const [especies, setEspecies] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    const [expandir, setExpandir] = useState(null);


useEffect(() => {
    
    const fetchEspecies = async () => {

        try {

            const response = await fetch('/especies.json');

            if (!response.ok) {

                throw new Error('Error al cargar los datos');

            }

            const data = await response.json();
            setEspecies(data);
            setLoad(false);

        } catch (error) {

            setError(error);
            setLoad(false);

        }

    };

    fetchEspecies();

},[]);

const toggleExpandir = id => {

    setExpandir(expandir === id ? null : id);

}

if (load || !especies) { return <div>Cargando...</div> }

return (

    <div>

        <h1>Especies extintas</h1>
        <ul>
            {especies && especies.map((especiesItem) =>
            
                <li key={especiesItem.id}>

                    <h2 onClick={() => toggleExpandir(especiesItem.id)} style={{cursor: 'pointer'}}>{especiesItem.nombre}</h2>

                    {expandir === especiesItem.id && (
                        <div>
                        <p>Periodo: {especiesItem.periodo}</p>
                        <p>Hábitat: {especiesItem.habitat}</p>
                        <p>Causas de extinción: 
                        <ul>
                            {especiesItem.causas.map((causa, index) => (

                                <li key={index}>{causa}</li>
                            )
                    
                        )}
                        </ul>
                    </p>
                    <p>Imagen:</p>
                    {especiesItem.imagen && (<img src={especiesItem.imagen} alt={especiesItem.nombre} style={{maxWidth: '350px'}}/>)}
                    </div>
                )}
                </li>
            
            )}


        </ul>

    </div>

);

};

export default EspeciesList;