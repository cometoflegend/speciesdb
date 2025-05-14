import React, {useEffect, useState} from 'react';

const AddEspecie = () => {

    const [especie,setEspecie] = useState({

        id:'',nombre:'',periodo:'',habitat:'',causas:[],imagen:null,

    });
    const [causa, setCausa] = useState('');

    useEffect(() => {
        setEspecie(prev => ({ ...prev, id: prev+1 }));
    }, []);

    const handleImg = (e) => {

        const img = e.target.files[0];
        setEspecie({...especie, imagen:img});

    }

    const handleCambio = (e) => {

        const {name,value} = e.target;
        setEspecie({...especie, [name]:value});

    }

    const addCausa = (e) => {

        e.preventDefault();

        const causaInput = causa.trim();

        if (causaInput && !especie.causas.includes(causaInput)) {

            setEspecie(prevState => ({...prevState, causas: [...prevState.causas, causaInput]}))

        }

        setCausa('');

    }

    const submitForm = (e) => {

        e.preventDefault();
        console.log('Añadido con éxito: ',especie);
        
    }

return (

    <form onSubmit={submitForm}>

        <p><input type="text" name="nombre" placeholder="Nombre" value={especie.nombre} onChange={handleCambio} required/></p>
        <p><input type="text" name="periodo" placeholder="Periodo de extinción" value={especie.periodo} onChange={handleCambio} required/></p>
        <p><input type="text" name="habitat" placeholder="Hábitat" value={especie.habitat} onChange={handleCambio} required/></p>
        <div>

            <label>Causas de extinción:</label>

                <input type="text" name="causa" placeholder="Añade causa" onChange={(e) => setCausa(e.target.value)} required/>
                <button type="submit" onClick={addCausa}>Añadir</button>

                <ul>

                    {especie.causas.map((causa,index) => (<li key={index}>{causa}</li>))}

                </ul>

        </div>

        <input type="file" accept="image/*" name="id" onChange={handleImg} required/>
        <p><button type="submit">Añadir especie</button></p>
    </form>


);

};

export default AddEspecie;