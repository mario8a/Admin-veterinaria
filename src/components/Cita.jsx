import React from 'react';

const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p> Mascota:  <span> {cita.mascota} </span> </p>
        <p> Dueño:  <span> {cita.dueno} </span> </p>
        <p> Fecha:  <span> {cita.fecha} </span> </p>
        <p> Hora:  <span> {cita.hora} </span> </p>
        <p> Sintomas:  <span> {cita.sintomas} </span> </p>

        <button className="button eliminar u-full-width"
                // onClick={} este onClick se crea en el componente principal
                /**Porque ahi se tienen todas las citas y es masfacil eliminarlo desde aho */
                onClick={() => eliminarCita(cita.id)}
                >

            Eliminar &times;
        </button>
    </div>  
);
 
export default Cita;