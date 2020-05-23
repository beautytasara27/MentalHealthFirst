/* eslint-disable */
/* eslint-disable */
import React, { Component } from 'react'
import {Jumbotron,Form, Container, Row, Col, Button} from 'react-bootstrap'
import firebase from './config/fbConfig'

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
          this.props.history.push('/forum')
        }).catch((err)=>{
          console.log(err)
        })
      }
    
    render(){
        return(
            <Container>
                <Jumbotron>
                  <h2>Welcome to my page</h2>
                  <p>Sign UP</p>
                </Jumbotron>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label>Username</Form.Label>
                    <Form.Control id="email" type="text" placeholder="Enter email" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" style={{color:"white"}} >Login
                </Button>
                <Button variant="primary" style={{color:"white"}} onClick={this.signup}>Signup
                </Button>
                </Form>
            </Container>
   
        )
    }
}
