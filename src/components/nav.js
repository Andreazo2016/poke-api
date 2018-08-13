import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default class Navegacao extends Component{
    render(){
        return (
            <div>
                <ul className="nav">
                    <li className="nav-item">
                    <p className='nav-link'>
                        <Link to='/'>Home</Link>
                        </p>
                    </li>
                    <li className="nav-item">
                        <p className='nav-link'>
                        <Link to='/about'>About</Link>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}