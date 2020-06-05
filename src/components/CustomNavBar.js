import React, {Component} from 'react'
import {Navbar, Nav, Row, NavDropdown} from  'react-bootstrap'
import {Link} from 'react-router-dom'
import {AuthConsumer} from './Context/AuthContext'

export default class CustomNavBar extends Component{
    state = {expanded:false}
  
    render(){
        return(
        <Navbar expanded={this.state.expanded} className="navbar-default" expand="sm"   sticky="top" style={{backgroundColor:"#053D2B", height:"80px"}}>
            <Navbar.Brand href="#home" style={{color:"#041114"}}><h5>Mental Health First</h5></Navbar.Brand>
            <Navbar.Toggle onClick={()=>this.setState({expanded : this.state.expanded? false : true})} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <AuthConsumer>
                { ({isAuth,login, logout}) =>(
                   
                    <Nav className="mr-auto" >
                        <Link to={'/'} style={{color:"white"}} className="nav-link" onClick={() => this.setState({expanded:false})} ><h5> Home </h5></Link>
                        <Link to={'/contact'} style={{color:"white"}} className="nav-link" onClick={() => this.setState({expanded:false})} ><h5> Contact</h5> </Link>
                        <Link to={'/about'} style={{color:"white"}} className="nav-link" onClick={() => this.setState({expanded:false})} ><h5> About </h5></Link>
                        <Link to={'/forum'} style={{color:"white"}} className="nav-link" onClick={() => this.setState({expanded:false})} ><h5> Forum </h5></Link>
                        
                        {isAuth? (
                            <Nav>
                            <Link className="nav-link" onClick={logout}>LogOut |</Link>
                            <NavDropdown title={isAuth.displayName} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/ProfilePage">Profile Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="nav-link" onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        ) : 
                        (<Link to={'/login'} style={{color:"white"}} className="nav-link" onClick={() => this.setState({expanded:false})} > <h5>Login </h5></Link>)}
                    </Nav>
                    )
                    
                }
                </AuthConsumer>
               
            </Navbar.Collapse>
        </Navbar>
        )
    }
}