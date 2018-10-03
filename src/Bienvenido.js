import React, { Component } from 'react';

class Bienvenido extends Component{
  render(){
    return(
      <h1>{this.props.nombre === 'Antony' ? `Bienvenido ${this.props.nombre} a ${this.props.sitio}` : ' Bienvenido Visitante'}</h1>
    );
  }
}
export default Bienvenido;
