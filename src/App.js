
import React, { Component } from 'react';
import ListarPokemon from './components/pokemonsList'
import Navegacao from './components/nav';
import {Jumbotron,Container} from 'reactstrap'


class App extends Component {
  render() {
    return (
      <Container>
        <Navegacao/>
      <Jumbotron>
        <h1 >Site de Pokemon</h1>
      </Jumbotron>
      <ListarPokemon/>
    </Container>
    );
  }
}

export default App;
