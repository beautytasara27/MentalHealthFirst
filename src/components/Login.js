/* eslint-disable */
/* eslint-disable */
import React, { Component } from 'react'
import { Jumbotron, Form, Container, Row, Col, Button } from 'react-bootstrap'
import firebase from './config/fbConfig'
import { Link } from 'react-router-dom'



export default class Login extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      password: '',
      email: '',

    }
    console.log(this.props)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  //when user press the signup button
  signup(e) {
    e.preventDefault();
    return (this.props.pass.history.push('/signup'));
  }

  //upon submitting the login form
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.unmount();
    //code to post to db
  }

  render() {
    var img = 'https://cdn.pixabay.com/photo/2015/04/04/22/07/stone-707173_960_720.jpg'
    // <Jumbotron className="row justify-content-center" style={{backgroundImage:`url(${img})`, paddingTop:'200px', paddingBottom:"200px",opacity:"0.9"}}>
//col-lg-3 col-md-6  col-sm-12 col-xs-12 col-xl-3 adjuster
    return (
      <div className="container" style={{ backgroundColor: "white" , padding: "30px"}}>
        <div ><h2 className="text-left">Login</h2></div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group border-bottom border-dark">
            <label htmlFor="name">Username</label>
            <input type="text" className="form-control" id="email" style={{ background: 'none', border: "none" }} onChange={this.handleChange} />

          </div>
          <div className=" form-group border-bottom border-dark">
            <label htmlFor="name">Password</label>
            <input type="text" id="password" type="password" className="form-control" style={{ background: 'none', border: "none" }} onChange={this.handleChange} />
          </div>

          <div className="row justify-content-start" style={{ paddingLeft: "15px" }}>
            <button className="btn btn-green-moon" type="submit" style={{ backgroundColor: "#11643D", color: "white" }} >Login</button>
          </div>
        </form>
        <div className="row justify-content-end">
          <Link to="/signup" style={{ color: "#233C1D" }} onClick={()=>this.props.unmount()}>Not a member? Sign Up here</Link>
        </div>
      </div>

    )
  }
}

