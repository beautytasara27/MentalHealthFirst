import React, {Component} from 'react'
import {Navbar, Nav, Row, NavDropdown} from  'react-bootstrap'
import {Link} from 'react-router-dom'
import {AuthConsumer} from './Context/AuthContext'

export default class CustomNavBar extends Component{
    state = {expanded:false}
  
    render(){
        return(
        <Navbar expanded={this.state.expanded} className="navbar-default" expand="sm" bg="light" variant="light" sticky="top">
            <Navbar.Brand href="#home">Mental Health First</Navbar.Brand>
            <Navbar.Toggle onClick={()=>this.setState({expanded : this.state.expanded? false : true})} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <AuthConsumer>
                { ({isAuth,login, logout}) =>(
                   
                    <Nav className="mr-auto" >
                        <Link to={'/'} className="nav-link" onClick={() => this.setState({expanded:false})} > Home </Link>
                        <Link to={'/contact'} className="nav-link" onClick={() => this.setState({expanded:false})} > Contact </Link>
                        <Link to={'/about'} className="nav-link" onClick={() => this.setState({expanded:false})} > About </Link>
                        <Link to={'/forum'} className="nav-link" onClick={() => this.setState({expanded:false})} > Forum </Link>
                        
                        {isAuth? (
                            <div>
                            <button onClick={logout}>logout</button>
                            <NavDropdown title={isAuth.displayName} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/ProfilePage">Profile Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        </div>
                        ) : 
                        (<Link to={'/login'} className="nav-link" onClick={() => this.setState({expanded:false})} > Login </Link>)}
                    </Nav>
                    )
                    
                }
                </AuthConsumer>
               
            </Navbar.Collapse>
        </Navbar>
        )
    }
}