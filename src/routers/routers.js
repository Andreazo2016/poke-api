import React, {Component} from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import App from './../App';
import GameInfo from '../components/gameInfo'
import About from './../components/about'
import Register from './../components/register'
export default class Routers extends Component{
    render(){
        return (
                    <Router>
                        <Switch>
                            <Route  exact path='/' component={App}/>
                            <Route path='/about' component={About}/>
                            <Route path='/game/:id' component={GameInfo} />
                            <Route path='/register' component={Register} />
                        </Switch>
                    </Router>
        )
    }
}