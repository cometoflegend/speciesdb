import React, { useState, useEffect, useContext } from 'react';
import { EspeciesContext } from './EspeciesProvider';
import { ListGroup, Modal, Button } from 'react-bootstrap';
import '../App.css';
import AddEspecie from './FormEspecies';

const EspeciesList = () => {
    const { especiesItems, removeFromEspecies } = useContext(EspeciesContext);
    const [expandir, setExpandir] = useState(null);
    const [filtroPeriodo, setFiltroPeriodo] = useState('');
    const [filtroHabitat, setFiltroHabitat] = useState('');
    const [filtro, setFiltro] = useState('');
    const [showModal, setShowModal] = useState(false);

    const toggleExpandir = (id) => {
        setExpandir(expandir === id ? null : id);
    };

    if (!especiesItems || especiesItems.length === 0) {
        return <div>Cargando...</div>;
    }

    const filtroEspecies = especiesItems.filter(item => {
        const checkPeriodo = filtroPeriodo === '' || item.periodo.toLowerCase().includes(filtroPeriodo.toLowerCase());
        const checkHabitat = filtroHabitat === '' || item.habitat.toLowerCase().includes(filtroHabitat.toLowerCase());
        const filtroNombre = item.nombre.toLowerCase().includes(filtro.toLowerCase());
        const filtroCausa = item.causas.some(c => c.toLowerCase().includes(filtro.toLowerCase()));
        return (checkPeriodo && checkHabitat && (filtro === '' || filtroNombre || filtroCausa));
    });

    return (
        <div className="especies-container">

            <div className="filtros desktop-only">

                <h2>Filtros</h2>
                <p><label>Período:</label><br />

                    <input value={filtroPeriodo} onChange={(e) => setFiltroPeriodo(e.target.value)} /></p>
                <p><label>Hábitat:</label><br />
                    <input value={filtroHabitat} onChange={(e) => setFiltroHabitat(e.target.value)} /></p>
                <p><label>Búsqueda general:</label><br />
                    <input type="text" placeholder="Nombre o causa" value={filtro} onChange={(e) => setFiltro(e.target.value)} /></p>

                <div className="formulario-especie">
                    <h3>Añadir especie</h3>
                    <AddEspecie />
                </div>

            </div>

            <button className='fab mobile-only' onClick={() => setShowModal(true)}>+</button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>

                <Modal.Header closeButton>

                    <Modal.Title>Agregar y Filtrar</Modal.Title>

                </Modal.Header>

                <Modal.Body><p><label>Período:</label><br />

                    <input value={filtroPeriodo} onChange={(e) => setFiltroPeriodo(e.target.value)} /></p>
                    <p><label>Hábitat:</label><br />
                        <input value={filtroHabitat} onChange={(e) => setFiltroHabitat(e.target.value)} /></p>
                    <p><label>Búsqueda general:</label><br />
                        <input type="text" placeholder="Nombre o causa" value={filtro} onChange={(e) => setFiltro(e.target.value)} /></p>

                    <div className="formulario-especie">
                        <h3>Añadir especie</h3>
                        <AddEspecie />
                    </div>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cerrar menú</Button>

                </Modal.Footer>

            </Modal>

            <div className="lista">

                <h1>Especies extintas</h1>

                <ListGroup className='lista-especies'>

                    {filtroEspecies.map(item => (
                        <ListGroup.Item className="card" key={item.id}>
                            <h2 onClick={() => toggleExpandir(item.id)} style={{ cursor: 'pointer' }}>
                                {item.nombre}
                            </h2>
                            {expandir === item.id && (
                                <div>
                                    <p>Tipo: {item.tipo_animal}</p>
                                    <p>Período: {item.periodo}</p>
                                    <p>Hábitat: {item.habitat}</p>
                                    <p>Causas de extinción:</p>
                                    <ul>
                                        {item.causas.map((causa, index) => (
                                            <li key={index}>{causa}</li>
                                        ))}
                                    </ul>
                                    <p>Imagen:</p>
                                    {item.imagen && (
                                        <img src={item.imagen} alt={item.nombre} style={{ maxWidth: '350px', objectFit:'cover' }} />
                                    )}
                                    <p>
                                        <button onClick={() => removeFromEspecies(item.nombre)} style={{ marginTop: '10px' }}>
                                            Eliminar
                                        </button>
                                    </p>
                                </div>
                            )}
                        </ListGroup.Item>
                    ))}

                </ListGroup>

            </div>

        </div>
    );
};

export default EspeciesList;