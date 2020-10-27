import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';

class App extends Component {
  constructor() {
    super();

    this.state = {
      names: ["Juan", "Pedro", "Germán"]
    }
  }

  render() {
    return (
      <div>
        {this.state.names.map((name) =>
          <Welcome name={name} />
        )}
      </div>
    );
  }
}

export default App;

/* 
¡Excelente trabajo Maker!

Nuestra solución es la siguiente. Creamos un nuevo archivo Welcome.js con el siguiente contenido:

import React from 'react';

const Welcome = (props) => {
  return <h1>Hola {props.name}</h1>
};

export default Welcome;
Como el componente no tiene estado, lo creamos como una función. Sin embargo, también lo hubieses podido crear como una clase:

import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hola {this.props.name}</h1>;
  }
}

export default Welcome;
Por último, debes importar el componente en el archivo App.js:

import Welcome from './Welcome';
 */