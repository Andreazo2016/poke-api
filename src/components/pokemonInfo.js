import React, {Component} from 'react'
export default class PokemonInfo extends Component{
    state = {
        idPokemon:0
    }
    componentDidMount(){
        const idPokemon = this.props.match.params.id
        this.setState({idPokemon})
    }
    render(){
        return (
            <div>
                <h1>Pokemon número: {this.state.idPokemon}</h1>
            </div>
        )
    }
}