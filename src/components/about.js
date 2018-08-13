import React, {Component} from 'react'
export default class About extends Component{
    componentDidMount(){
     const { match: { params } } = this.props
    }
    render(){
        return (<div>
            <h1>Página para mostrar informações do site pokemon</h1>
        </div>)
    }
}