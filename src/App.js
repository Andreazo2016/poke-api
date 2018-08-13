
import React, { Component } from 'react';
import ListarPokemon from './components/pokemonsList'
import Navegacao from './components/nav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "container">
        <Navegacao/>
          <div className='jumbotron'>
          <h1 className="display-4 text-center">
          API de Pokemon
          </h1>
          </div>
        </div>  
          <ListarPokemon/>
      </div>
    );
  }
}

export default App;
