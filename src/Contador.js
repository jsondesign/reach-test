import React, {Component} from 'react';

class Contador extends Component{

  //llamar ka funcion super en el constructor
  constructor(){
    super();

//objeto con propiedades
    this.state = { //agrego un valor a  la clave
      contador : 2
    };

    }

aumentarContador = () =>{
  // Importante no modificar directamente el estado, si no usar setState
  // y pasarle la clave del objeto a modificar y su nuevo valor
  this.setState({contador: this.state.contador + 1});
}



render(){
      return(
        /* Como veíamos antes es necesario devolver un único elemento padre
        por eso usamos un div para agrupar lo demás elementos */
        <div><span>{this.state.contador}</span>
        <button onClick={this.aumentarContador}> Aumentar +</button>
        </div>
      );
    }
}

export default Contador;
