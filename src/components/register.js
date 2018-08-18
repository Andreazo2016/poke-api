import React , {Component} from 'react'
import{Form,FormGroup,Input,Button,Container} from  'reactstrap'
import Home from './home'
export default class Register extends Component{
    
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    state = {
        gameName:'',
        typeMidia:''
    }

    handleOnChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault()
      const  {gameName,typeMidia} = this.state
       console.log(gameName +' : '+typeMidia)
    }
    render(){
        return(
            <div>
                <Home/>
                <Container>
                    <h1>Cadastro de um novo Game</h1>
                <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Input type ='text' name='gameName'  ref='gameName' onChange={this.handleOnChange}  />
                        </FormGroup>
                        <FormGroup>
                            <Input type ='text' ref='typeMidia' name='typeMidia' onChange={this.handleOnChange}/>
                        </FormGroup>
                        <Button  >Cadastrar</Button>
                </Form>
            </Container>
            </div>
            
        )
    }
}