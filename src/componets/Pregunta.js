import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = () => {

    // Definir cantidad
    const [ cantidad, guardarCantidad] = useState(0)
    const [ error, guardarError] = useState(false)

    // Funcion que define presupuestos
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value), 10)
    }

    // Submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault()

        // Validar form
        if(cantidad < 1 || isNaN( cantidad )) {
            guardarError(true)
            return
        }

        // Validacion correcta de form
        guardarError(false)
    }

    return (
        <Fragment>
            <h2>Coloque su presupuesto</h2>

            { error ? <Error mensaje="El presupuesto solo admite numeros positivos" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloque su presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;