import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import GameService from './services/GameService'
import { Table,Container } from 'reactstrap';
export  default class ListarGames extends Component{

	state = {
		Games : []
	}
	componentDidMount(){
		const Games = new GameService().AllGames()
		console.log(Games)
		this.setState({Games})
	}
	render(){
		return (
				<div>
					<div>
					</div>
					<Container>
						<Table bordered >
							<thead>
								<tr>
								
								<th scope="col">Nome</th>
								<th scope="col">Mídia</th>
								<th scope="col">Info</th>
								</tr>
							</thead>
							<tbody>
								{
									this.state.Games.map((game)=>{
										return (
										<tr>
												
												<td>{game.name}</td>
												<td>{game.midia}</td>
												<td><Link to={`/game/${game.id}`}>Mais Info</Link></td>
										</tr>
										)
									})
								}				
							</tbody>
						</Table>
					</Container>
				</div>


			)
	}

}