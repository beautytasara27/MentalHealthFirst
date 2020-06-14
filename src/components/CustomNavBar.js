import React, { Component } from 'react'
import { Navbar, Nav, Row, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthConsumer } from './Context/AuthContext'
import { Modal } from 'react-bootstrap';
import Login from './Login'
import './styler.css'

export default class CustomNavBar extends Component {
    state = {
        expanded: false,
        modal: false
    }
    UnmountModal = () => {
        this.setState({ modal: !this.state.modal })
    }

    render() {
        
        return (
            <div>
                <Navbar expanded={this.state.expanded} className="navbar-default navy" expand="sm" sticky="top">
                    <Navbar.Toggle onClick={() => this.setState({ expanded: this.state.expanded ? false : true })} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <AuthConsumer>
                            {({ isAuth, login, logout }) => (

                                <Nav className="mr-auto " >
                                <div className="row justify-content-between">
                                    <Link to={'/'} style={{ color: "white" }} className="nav-link" onClick={() => this.setState({ expanded: false })} ><h5> Home </h5></Link>
                                    <Link to={'/contact'} style={{ color: "white" }} className="nav-link" onClick={() => this.setState({ expanded: false })} ><h5> Contact</h5> </Link>
                                    <Link to={'/about'} style={{ color: "white" }} className="nav-link" onClick={() => this.setState({ expanded: false })} ><h5> About </h5></Link>
                                    <Link to={'/forum'} style={{ color: "white" }} className="nav-link" onClick={() => this.setState({ expanded: false })} ><h5> Forum </h5></Link>

                                    {isAuth ? (
                                        <Nav>
                                            <Link className="nav-link" onClick={logout}>LogOut |</Link>
                                            <NavDropdown title={isAuth.displayName} id="collasible-nav-dropdown">
                                                <NavDropdown.Item href="/ProfilePage">Profile Settings</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item className="nav-link" onClick={logout}>Logout</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    ) :
                                        (<button  style={{backgroundColor:"transparent", color:"white", border:"none"}} className="nav-link" onClick={() => this.setState({expanded:false,modal: !this.state.modal })} > <h5>Login </h5></button>)}
                                        </div>
                                </Nav>
                            )

                            }
                        </AuthConsumer>

                    </Navbar.Collapse>
                </Navbar>

                <Modal
                    centered
                    show={this.state.modal} onHide={() => this.setState({ modal: !this.state.modal })}><Login pass={this.props} unmount={this.UnmountModal} /></Modal>
            </div>
        )
    }
}