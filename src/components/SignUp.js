/* eslint-disable */
/* eslint-disable */
import React, { Component } from 'react'
import { Jumbotron, Form, Container, Row, Col, Button } from 'react-bootstrap'
import firebase, { generateUserDocument } from './config/fbConfig'
import axios from 'axios'
const isNumberRegx = /\d/;
const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      displayName: '',
      file: {},
      isloggedIn: false,
      imgUrl: '',
      passwordFocused: false,
      passwordValidity: {
        minChar: null,
        number: null,
        specialChar: null
      }
    }

  }
  handleChange = (e) => {
    if (e.target.password === e.target.confirm) {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    else {
      alert("passwords do not match");
    }
  }
  handlePasswordChange = (password) => {
    this.setState({
      password: password
    })
    this.setState({
      passwordValidity: {

        number: isNumberRegx.test(this.state.password) ? true : false,
        specialChar: specialCharacterRegx.test(this.state.password) ? true : false,
        minChar: this.state.password.length >= 8 ? true : false
      }
    })
  }
  chooseFile = (e) => {
    this.setState({ file: e.target.files[0] });

  }

  handleSubmit = (e) => {
    e.preventDefault();

   axios.post('http://localhost:7004/api/users', {email: this.state.email, name: this.state.displayName, password: this.state.password}).then((res)=>{
    this.props.history.push('/forum')
   }).catch((error)=>{
     console.log(error)
   })
  }

  render() {
    return (
      <Jumbotron style={{ backgroundColor: 'white', position: "center", padding: '200px' }}>
        <Container style={{ backgroundColor: '#91BB7F', padding: '20px', position: "center", }}>
          <h2 className="text-center">SignUp</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group >
              <Form.Label>displayName</Form.Label>
              <Form.Control id="displayName" type="text" placeholder="Enter DisplayName" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group >
              <Form.Label>Email address</Form.Label>
              <Form.Control id="email" type="email" placeholder="Enter email adress" onChange={this.handleChange} />
            </Form.Group>
            {this.state.passwordFocused && <PasswordStrengthIndicator validity={this.state.passwordValidity} />}
            <Form.Group >
              <Form.Label>Password</Form.Label>
              <Form.Control id="password" type="password" value={this.state.password} onFocus={() => this.setState({ passwordFocused: true })} placeholder="Enter Password" onChange={e => this.handlePasswordChange(e.target.value)} />
            </Form.Group>
            <Form.Group >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control id="confirm" type="password" placeholder="Confirm Password" onChange={this.handleChange} />
            </Form.Group>
            <Button className=" btn-green-moon" variant="primary" type="submit">
              Submit
                </Button>
          </Form>

        </Container>
      </Jumbotron>

    )
  }
}
class PasswordStrengthIndicator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Password must contain</p>
        <ul>
          <PasswordStrengthIndicatoritem isValid={this.props.validity.minChar} text="have at least 8 characters" />
          <PasswordStrengthIndicatoritem isValid={this.props.validity.number} text="have at least 1 digit" />
          <PasswordStrengthIndicatoritem isValid={this.props.validity.specialChar} text="have at least 1 special character" />
        </ul>
      </div>
    )
  }
}

const PasswordStrengthIndicatoritem = ({ isValid, text }) => {
  const highlightClass = isValid ? "text-success" : isValid !== null ? "text-danger" : ""
  return <li className={highlightClass}>{text}</li>
}