import React, {Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita';

function App() {

    //Arreglo de citas/ esta en principal porque se pondra en el segundo componente
    const [citas, guardarCitas] = useState([]);

    ///useEffect para realizar ciertas operacioes cuando el state cambia
    /**Se ejecuta cuando inicia el componente y tambien cuando hay cambios en el 
     * Se le coloca un arreglo vacio par que solo se ejecute una vez
    */
    useEffect(() => {
        console.log('Doc listo o algo paso');
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
        const nuevaCitas = citas.filter(cita => cita.id != id);
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