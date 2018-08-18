import React, {Component} from 'react'
export default class GameInfo extends Component{
    state = {
        gameId:0
    }
    componentDidMount(){
        const gameId = this.props.match.params.id
        this.setState({gameId})
    }
    render(){
        return (
            <section>
                
            </section>
        )
    }
}