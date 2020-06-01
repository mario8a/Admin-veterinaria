import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita';

function App() {

    //citas en localStorage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales) {
        citasIniciales = [];
    }

    //Arreglo de citas/ esta en principal porque se pondra en el segundo componente
    const [citas, guardarCitas] = useState(citasIniciales);

    ///useEffect para realizar ciertas operacioes cuando el state cambia
    /**Se ejecuta cuando inicia el componente y tambien cuando hay cambios en el 
     * Se le coloca un arreglo vacio par que solo se ejecute una vez
    */
    useEffect(() => {
        let citasIniciales = JSON.parse(localStorage.getItem('citas'));
        if(citasIniciales) {
            //en caso de que alla algo en el state, se colocara en el localstorage
            localStorage.setItem('citas', JSON.stringify(citas))
        } else {
            //si no hay citas
            localStorage.setItem('citas', JSON.stringify([]))
        }
    }, [citas])


    // Funcion que tome la citas actuales y agregue la nueva
    const crearCita = cita => {
        // console.log(cita);
        guardarCitas([
            //crea una copia del arreglo y despues crea la cita
            ...citas,
            cita
        ]);
    }
    
    //funcion que elimina una cita por su id
    const eliminarCita = id => {
        // console.log(id)
        const nuevaCitas = citas.filter(cita => cita.id !== id);
        guardarCitas(nuevaCitas)
    }

    //mensaje condicional
    const titulo = citas.length === 0 ?  'No hay citas' : 'Administra tus citas'

    return(

        <Fragment>
            <h1>Administrador de paciente</h1>

            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario 
                            crearCita={crearCita}
                        />
                    </div>
                    <div className="one-half column">
                        <h1>{titulo}</h1>
                        {
                            citas.map(cita => (
                                <Cita
                                    key={cita.id}
                                    cita={cita}
                                    eliminarCita = {eliminarCita}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;