import React,{useState, useEffect} from  'react';
import Header from './components/Header';
import Formularios from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima'

function App() {

    const [ ciudad, guardarCiudad] = useState('');
    const [ pais, guardarPais] = useState('');
    const [ error, guardarError] = useState(false);
    const [Resultado, guardarResultado] = useState({}); 


    useEffect( () =>{
      if (ciudad ===''){
        return;
      }
      const consultarApi =  async () => {

        const  apiId= '1630cd83dc74e73f1b6201da24abae2f';
  
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;
        
        const consultar = await fetch (url);
        const resultado = await consultar.json();
        guardarResultado(resultado);
  
      }  
      consultarApi();
    }, [ciudad, pais]);

    const datosConsulta = datos => {
      if(datos.ciudad === '' || datos.pais === '') {
        guardarError(true);
        return;
      }

      // Ciudad y pais existen, agregarlos al state
      guardarCiudad(datos.ciudad);
      guardarPais(datos.pais);
      guardarError(false);
  
    }
    
    



    let componente;
    if (error){
      componente= <Error mensaje='Todos lo campos son obligatorios'/>
    } else if(Resultado.cod === '404'){
      componente = <Error 
                  mensaje='La ciudad no Existe en Nuestro Registro'
                  />

    } else {
      componente=<Clima 
                  resultado={Resultado}
                  /> ;
    }

    
    return (
    <div className="app">
      
      <Header
        titulo='Clima React App.'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formularios 
                 datosConsulta={datosConsulta}
              />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
