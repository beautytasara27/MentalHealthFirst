/* eslint-disable */
/* eslint-disable */
import React, { Component } from 'react'
import {Jumbotron, Form, Container, Row, Col, Button} from 'react-bootstrap'
import firebase, { generateUserDocument } from './config/fbConfig'

export default class Signup extends Component{
    state = {
        email: '',
        password: '',
        displayName: '',
      }
      handleChange = (e) => {
        if(e.target.password===e.target.confirm){
          this.setState({
            [e.target.id]: e.target.value
          })
        }
        else{
          alert("passwords do not match");
        }
        
      }
      handleSubmit = (e) => {
        e.preventDefault();
        const {user} =firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            generateUserDocument(user, {displayName})
          console.log(u)
          this.setState({isloggedIn:true})
        }).catch((err)=>{
          console.log(err)
          
        })
        this.setState({email: "", password: "", displayName: ""})
        return(this.props.history.push('/forum')
        )
        
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
                    <Form.Label>displayName</Form.Label>
                    <Form.Control id="displayName" type="text" placeholder="Enter Username" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control id="email" type="email" placeholder="Enter email adress" onChange={this.handleChange}/>
            </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="password" type="password" placeholder="Enter Password" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control id="confirm" type="password" placeholder="Confirm Password" onChange={this.handleChange}/>
            </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
   
        )
    }
}