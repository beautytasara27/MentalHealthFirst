/* eslint-disable */
/* eslint-disable */
import React, { Component } from 'react'
import {Jumbotron,Form, Container, Row, Col, Button} from 'react-bootstrap'
import firebase from './config/fbConfig'
import {Link} from 'react-router-dom'


export default class Login extends Component{
  
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
        password:'',
        email:''
      }
    }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }

      //when user press the signup button
      signup(e){
        e.preventDefault();
        return(this.props.history.push('/signup'));
      }

      //upon submitting the login form
      handleSubmit = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
          console.log("signed in",u)
          this.props.history.push({pathname: '/forum', data: "hr" })
        }).catch((err)=>{
          console.log(err)
        })
      }
    
    render(){
      var img ='https://cdn.pixabay.com/photo/2015/04/04/22/07/stone-707173_960_720.jpg'
        return(
          <Jumbotron className="row justify-content-center" style={{backgroundImage:`url(${img})`, paddingTop:'200px', paddingBottom:"200px",opacity:"0.9"}}>

            <div  className="col-lg-3 col-md-6  col-sm-12 col-xs-12 col-xl-3 " style={{backgroundColor: '#91BB7F',padding:'20px',position: "center",}} >
                  <h2 className="text-center">Login</h2>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label  >Username</Form.Label>
                    <Form.Control id="email" type="text" placeholder="Enter email" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                </Form.Group>
                <button className="btn" type="submit" style={{backgroundColor:"#11643D",color:"white"}} >Login
                </button>
                </Form>
                <Link style={{color:"#233C1D"}} onClick={this.signup}>Not a member? Sign Up here
                </Link>
            </div>
          </Jumbotron>
   
        )
    }
}
