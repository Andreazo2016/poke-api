import React, {Component} from 'react'
import Navegacao from './nav';
import {Jumbotron,Container} from 'reactstrap'
export default class Home extends Component{
    render(){
        return (
            <Container>
            <Navegacao/>
          <Jumbotron>
            <h1 >GameFlix</h1>
          </Jumbotron>
        </Container>
        )
    }
}