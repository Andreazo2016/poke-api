import React, {Component} from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import App from './../App';
import PokemonInfo from './../components/pokemonInfo'
import About from './../components/about'
export default class Routers extends Component{
    render(){
        return (
                    <Router>
                        <Switch>
                            <Route  exact path='/' component={App}/>
                            <Route path='/about' component={About}/>
                            <Route path='/pokemon/:id' component={PokemonInfo} />
                        </Switch>
                    </Router>
        )
    }
}