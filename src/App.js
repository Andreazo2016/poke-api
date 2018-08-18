
import React, { Component } from 'react';
import ListarPokemon from './components/pokemonsList'
import Navegacao from './components/nav';
import {Jumbotron,Container} from 'reactstrap'
import ListarGames from './components/pokemonsList';
import Home from './components/home'

class App extends Component {
  render() {
    return (
    <section>
      <Home/>
       <ListarGames/>
    </section>
    );
  }
}

export default App;
