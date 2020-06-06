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
      // <Jumbotron className="row justify-content-center" style={{backgroundImage:`url(${img})`, paddingTop:'200px', paddingBottom:"200px",opacity:"0.9"}}>

        return(
          <Jumbotron className="row justify-content-center logbackground">
            <div  className="col-lg-3 col-md-6  col-sm-12 col-xs-12 col-xl-3 adjuster " >
                  <div ><h2 className="text-left">Login</h2></div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group border-bottom border-dark">
                <label htmlFor="name">Username</label>
                <input type="text" className="form-control" id="email" style={{background:'none', border:"none"}} onChange={this.handleChange}/>
                  
                </div>
                <div  className=" form-group border-bottom border-dark">
                <label htmlFor="name">Password</label>
                    <input type="text" id="password"   type="password" className="form-control" style={{background:'none', border:"none"}} onChange={this.handleChange}/>
                </div>
                <div className="row justify-content-start" style={{paddingLeft:"15px"}}>
                <button className="btn" type="submit" style={{backgroundColor:"#11643D",color:"white"}} >Login</button>
                </div>
                </form>
                <div className="row justify-content-end">
                <Link style={{color:"#233C1D"}} onClick={this.signup}>Not a member? Sign Up here</Link>
                </div>
            </div>
          </Jumbotron>
   
        )
    }
}
