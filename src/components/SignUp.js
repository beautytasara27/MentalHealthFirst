/* eslint-disable */
/* eslint-disable */
import React, { Component } from 'react'
import { Jumbotron, Form, Container, Button, Modal } from 'react-bootstrap'
import axios from 'axios'
const isNumberRegx = /\d/;
const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
import {AuthContext} from './Context/AuthContext'

export default class Signup extends Component {
  static contextType = AuthContext
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
        specialChar: null,

      },
      confirmed: true,
      confirm: ''
    }

  }
  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      confirmed: true,
      [e.target.id]: e.target.value
    })

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
    var data = new FormData();
    data.append('username', this.state.displayName);
    data.append('password', this.state.password);
    data.append('grant_type', 'password');

    var access = {Username: 'uaa', Password: 'password@123'} 
    if (this.state.password == this.state.confirm) {
      axios({method:'post', url:'https://forumuaapplication.herokuapp.com/api/users', data:{ email: this.state.email, name: this.state.displayName, password: this.state.password ,profilePicture : ""}, headers: {'Authorization': `Basic ${access}`}}).then((res) => {
       // console.log("toky",res)
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
         // console.log("my context", this.context);
          //this.setState({ isLoggedIn: true });
         // this.props.unmount();
         //  console.log("token :", result)
    
        }).catch(e => {
          alert("Account Information is wrong. Sign up if you are new to the site")
        });
      this.props.history.push('/forum')
      }).catch((error) => {
       // console.log(error)
      })
    }
    else {
      this.setState({ confirmed: false })
    }



  }

  render() {
    return (
      <Jumbotron>
        <div className="container" style={{ backgroundColor: '#91BB7F', padding: '20px', position: "center", }}>
          <h2 className="text-center texty ">SignUp</h2>
          <div className="container" style={{ padding:"60px"}}>
          <form onSubmit={this.handleSubmit} >

            <div className=" form-group border-bottom border-dark">
              <label>Username</label>
              <input id="displayName" className="form-control" type="text" onChange={this.handleChange} style={{ background: 'none', border: "none" }} />
            </div>
            <div className=" form-group border-bottom border-dark">
              <label>Email</label>
              <input id="email" className="form-control" type="email" onChange={this.handleChange} style={{ background: 'none', border: "none" }} />
            </div>
            

            {this.state.passwordFocused && <PasswordStrengthIndicator validity={this.state.passwordValidity} />}

            <div className=" form-group border-bottom border-dark" >
              <label>Password</label>
              <input id="password" className="form-control" type="password" value={this.state.password} onFocus={() => this.setState({ passwordFocused: true })} onChange={e => this.handlePasswordChange(e.target.value)} style={{ background: 'none', border: "none" }} />
            </div>
            {this.state.confirmed ? null : <p>Passwords do not match</p>}
            <div className=" form-group border-bottom border-dark">
              <label>Confirm Password</label>
              <input id="confirm" className="form-control" type="password" onChange={this.handleChange} style={{ background: 'none', border: "none" }} />
            </div>
            <button className=" btn-green-moon" variant="primary" type="submit">
              Submit
          </button>
          </form>
          </div>



        </div>
      </Jumbotron >

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