import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem,NavLink } from 'reactstrap'
export default class Navegacao extends Component {
    render() {
        return (
            <Nav>
                <NavItem>
                    <NavLink>
                        <Link exact to='/'>
                        Home
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                <NavLink>
                        <Link exact to='/register'>
                        Cadastrar
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                <NavLink>
                        <Link exact to='/About'>
                        Sobre
                        </Link>
                    </NavLink>
                </NavItem>
                
            </Nav>
        )
    }
}