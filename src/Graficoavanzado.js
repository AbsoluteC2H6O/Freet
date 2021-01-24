import React, {Component} from "react";
import './App.css';
import './NavBar2.css'
//import Avanzado from './Avanzado.html'
//var htmlContenido= { __html: Avanzado };

  class Graficoavanzado extends Component{
      render(){
        
          return(
              <>
             
            {/** <div id="Avanzado" dangerouslySetInnerHTML={htmlContenido}/> */}
                <div>
                  avanzado
                </div>
              </>
          );
      }
  }
 export default Graficoavanzado;

/**
 * 
 *  export default class App1 extends Component {
  render() {
      return (
        <div id="Avanzado" dangerouslySetInnerHTML={htmlContenido}/>
      )
  }
}
render(Avanzado, document.getElementById('Avanzado'));
 */

//opciones

//https://github.com/babel/babel-loader/issues/370
//https://github.com/babel/babel-loader/issues/173
//https://webpack.js.org/concepts/#loaders

