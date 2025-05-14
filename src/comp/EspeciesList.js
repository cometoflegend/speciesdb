import React, { useState, useEffect, useContext } from 'react';
import { EspeciesContext } from './EspeciesProvider';
import { ListGroup } from 'react-bootstrap';

const EspeciesList = () => {
    const { especiesItems } = useContext(EspeciesContext);
    const [expandir, setExpandir] = useState(null);

    const toggleExpandir = (id) => {
        setExpandir(expandir === id ? null : id);
    };

    if (!especiesItems || especiesItems.length === 0) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Especies extintas</h1>
            <ListGroup>
                {especiesItems.map(item => (
                    <ListGroup.Item key={item.id}>
                        <h2 onClick={() => toggleExpandir(item.id)} style={{ cursor: 'pointer' }}>
                            {item.nombre}
                        </h2>

                        {expandir === item.id && (
                            <div>
                                <p>Periodo: {item.periodo}</p>
                                <p>Hábitat: {item.habitat}</p>
                                <p>Causas de extinción:</p>
                                <ul>
                                    {item.causas.map((causa, index) => (
                                        <li key={index}>{causa}</li>
                                    ))}
                                </ul>
                                <p>Imagen:</p>
                                {item.imagen && (
                                    <img src={item.imagen} alt={item.nombre} style={{ maxWidth: '350px' }} />
                                )}
                            </div>
                        )}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default EspeciesList;