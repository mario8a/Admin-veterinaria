import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';


const Formulario = ({crearCita}) => {

    

    //Creando el state
    const [cita, actualizarCita] = useState({
        mascota: '',
        dueno: '',
        fecha: '',
        hora: '',
        sintomas: '' 
    });


    const [error, actualizarError] = useState(false);

    //Funcion que se ejecuta cada vez que el usuario escribe en un inpit
    const actualizarState = (e) => {
        actualizarCita({
            //tomando una copia del arreglo y reesribirlo lo que se escriba en el campo
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    //extrar los valores
    //Esto para no estar escribiendo cita.mascota....cita.dueno..
    const {mascota, dueno, fecha, hora, sintomas} = cita;

    //Cuando el usuario presiona enviar vita
    const submitCita = e => {
        e.preventDefault();


        // Validar
        if(mascota.trim() === '' || dueno.trim() === '' || fecha.trim() === ''
            || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }

        //eliminar el mensaje previo
        actualizarError(false);

        // Asignar un id
        cita.id = uuid();
        //crear la cita /// trayendo la funcion desde los props // viene del componente principal
        crearCita(cita);

        //Reiniciar form
        actualizarCita({
            mascota: '',
            dueno: '',
            fecha: '',
            hora: '',
            sintomas: '' 
        });
    }

    return ( 

        <Fragment>

            
            <h2>Crear cita</h2>

            {
                error ? <p className="alerta-error">Todos los campos so obligatorio</p>
                : null
            }

            
            <form action=""
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"    
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre del dueño</label>
                <input 
                    type="text"
                    name="dueno"
                    className="u-full-width"    
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={dueno}
                />

                <label>Nombre Mascota</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea 
                    className="u-full-width" 
                    name="sintomas" 
                    value={sintomas} 
                    onChange={actualizarState}> 

                </textarea>

                <button type="submit" className="u-full-width button-primary">
                    Agregar cita
                </button>
            </form>
        </Fragment>
        
     );
}
 
export default Formulario;