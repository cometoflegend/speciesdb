import React, { useEffect, useState, useContext } from 'react';
import { EspeciesContext } from './EspeciesProvider';

const AddEspecie = () => {

    const { addToEspecies } = useContext(EspeciesContext);

    const [especie, setEspecie] = useState({

        id: '', nombre: '', tipo_animal: '', periodo: '', habitat: '', causas: [], imagen: null,

    });
    const [causa, setCausa] = useState('');

    const handleImg = (e) => {

        const file = e.target.files[0];

        if (file) {

            if (file) {

                const reader = new FileReader();
                reader.onloadend = () => {

                    setEspecie(prev => ({ ...prev, imagen: reader.result }));

                };

                reader.readAsDataURL(file); // Con esto convierto la imagen a base64, es la única forma de que carguen las imágenes de las especies almacenadas en local tras recargar

            }
            
        }

    }

        const handleCambio = (e) => {

            const { name, value } = e.target;
            setEspecie({ ...especie, [name]: value });

        }

        const addCausa = (e) => {

            e.preventDefault();

            const causaInput = causa.trim();

            if (causaInput && !especie.causas.includes(causaInput)) {

                setEspecie(prevState => ({ ...prevState, causas: [...prevState.causas, causaInput] }))

            }

            setCausa('');

        }

        const submitForm = (e) => {

            e.preventDefault();
            addToEspecies({ ...especie, id: Date.now() });  // Uso la fecha como id por facilitar las cosas
            setEspecie({ nombre: '', tipo_animal: '', periodo: '', habitat: '', causas: [], imagen: null });  // Limpieza del form
            console.log('Añadido con éxito: ', especie);

        }

        return (

            <form onSubmit={submitForm}>

                <p><input type="text" name="nombre" placeholder="Nombre" value={especie.nombre} onChange={handleCambio} required /></p>
                <p><input type="text" name="tipo_animal" placeholder="Tipo" value={especie.tipo_animal} onChange={handleCambio} required /></p>
                <p><input type="text" name="periodo" placeholder="Periodo de extinción" value={especie.periodo} onChange={handleCambio} required /></p>
                <p><input type="text" name="habitat" placeholder="Hábitat" value={especie.habitat} onChange={handleCambio} required /></p>
                <div>

                    <label>Causas de extinción:</label>

                    <input type="text" name="causa" placeholder="Añade causa" onChange={(e) => setCausa(e.target.value)} required />
                    <button type="button" onClick={addCausa}>Añadir</button>

                    <ul>

                        {especie.causas.map((causa, index) => (<li key={index}>{causa}</li>))}

                    </ul>

                </div>

                <input type="file" accept="image/*" name="id" onChange={handleImg} required />
                
                <p><button type="submit" style={{ marginTop: '10px' }}>Añadir especie</button></p>
            </form>


        );

    };

    export default AddEspecie;