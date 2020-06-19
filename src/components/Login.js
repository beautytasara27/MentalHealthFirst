/* eslint-disable */
/* eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../components/Context/AuthContext'
import axios from 'axios'


export default class Login extends Component {
  static contextType = AuthContext
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      password: '',
      username: '',
      isError: false,
      isLoggedIn: false


    }

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  //when user press the signup button
 
  //upon submitting the login form
  handleSubmit = (e) => {
    e.preventDefault();
    
    var data = new FormData();
    data.append('username', this.state.username);
    data.append('password', this.state.password);
    data.append('grant_type', 'password');

    var config = {
      method: 'post',
      url: 'https://forumuaapplication.herokuapp.com/oauth/token',
      headers: {
        'Authorization': 'Basic dWFhOnBhc3N3b3JkQDEyMw==',
        //...data.getHeaders()
      },
      data: data
    };
    axios(config).then(result => {
      this.context.setAuthTokens(result.data);
      //console.log("my context", this.context);
      this.setState({ isLoggedIn: true });
      this.props.unmount();
     // console.log("token :", result)

    }).catch(e => {
      alert("Account Information is wrong. Sign up if you are new to the site")
    });
   
  }


  render() {

    return (
      <div className="container" style={{ backgroundColor: "white", padding: "30px" }}>
        <div ><h2 className="text-left">Login</h2></div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group border-bottom border-dark">
            <label htmlFor="name">Username</label>
            <input type="text" className="form-control" id="username" style={{ background: 'none', border: "none" }} onChange={this.handleChange} />

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
          <Link to="/signup" style={{ color: "#233C1D" }} onClick={() => this.props.unmount()}>Not a member? Sign Up here</Link>
        </div>
      </div>

    )
  }
}

