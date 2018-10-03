import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importar paginas
import Bienvenido from './Bienvenido';
import Contador from './Contador';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <Bienvenido nombre='Antony' sitio='Ceo Company' />
          </div>
      <Contador />
        </header>
      </div>
    );
  }
}

export default App;
