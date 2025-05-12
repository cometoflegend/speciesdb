import React, {useEffect, useState} from 'react';

const addEspecie = (/* handler de añadir especie */) => {

    const [especie,setEspecie] = useState({

        id:'',nombre:'',periodo:'',habitat:'',causas:[],imagen:null,

    });


    /* 
    
        constantes a añadir;

        - añadir foto
        - handler de cambios
        - añadir causas de extinción
        - submit del formulario

       */

    const handleImg = () => {



    }

    const handleCambio = () => {



    }

    const addCausa = () => {



    }

    const submitForm = () => {

        
    }

return (

    <form onSubmit/*={handler de submit}*/>

        <input type="text" name="id" placeholder="ID" value={especies.id} /* onChange={handler de cambios} */ required/>
        <input type="text" name="nombre" placeholder="Nombre" value={especies.nombre} /* onChange={handler de cambios} */ required/>
        <input type="text" name="periodo" placeholder="Periodo de extinción" value={especies.periodo} /* onChange={handler de cambios} */ required/>
        <input type="text" name="habitat" placeholder="Hábitat" value={especies.habitat} /* onChange={handler de cambios} */ required/>
        /* aquí iría un botón que permita añadir varias causas de extinción */
        <input type="file" accept="image" name="id" /* onChange={handler de añadir foto} */ required/>
        <button type="submit">Añadir especie</button>
    </form>


);

}