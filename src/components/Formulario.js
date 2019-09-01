import React, {useState} from 'react';

function Formularios({datosConsulta}) {
    

    const [busqueda, guardarBusqueda] = useState({
        ciudad:'',
        pais:''
    })

    const handlChange=  e =>{
        ///cambiar el state
        guardarBusqueda({
            ...busqueda, 
            [e.target.name] : e.target.value
        });
        
    };
    const consultarClima = e =>{
        e.preventDefault();
        datosConsulta(busqueda)

    }
    
    return (
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input
                    type='text'
                    name='ciudad'
                    id='cuidad'
                    onChange={handlChange}
                />
                <label htmlFor='ciudad' >Ciudad.</label>
            </div>

            <div className="input-field col s12">
                <select onChange={handlChange} name='pais'>
                    <option value=''>Selectiona Un País.</option>
                    <option value='US'>Estados Unidos</option>
                    <option value='MX'>Mexico</option>
                    <option value='AR'>Argentina</option>
                    <option value='CO'>Colombia</option>
                    <option value='CR'>Costa Rica</option>
                    <option value='ES'>España</option>
                    <option value='PE'>Perú</option>
                    <option value='VE'>Venezuela</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Buscar Clima" />
            </div>
        </form>
    );
    
}

export default Formularios;