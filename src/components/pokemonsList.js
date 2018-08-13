import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PokeService from './services/pokeService'
export  default class ListarPokemon extends Component{

	state = {
		pokemons : []
	}
	componentDidMount(){
		const pokemons = new PokeService().AllPokemon()
		console.log(pokemons)
		this.setState({pokemons})
	}
	render(){
		return (
				<div>
					<div>
					</div>
					<div className='container'>
						<table className='table table-bordered'>
							<thead>
								<tr>
								
								<th scope="col">Nome</th>
								<th scope="col">Nível de poder</th>
								<th scope="col">Info</th>
								</tr>
							</thead>
							<tbody>
								{
									this.state.pokemons.map((pokemon)=>{
										return (
										<tr>
												
												<td>{pokemon.name}</td>
												<td>{pokemon.power}</td>
												<td><Link to={`/pokemon/${pokemon.id}`}>Mais Info</Link></td>
										</tr>
										)
									})
								}				
							</tbody>
						</table>
					</div>
				</div>


			)
	}

}