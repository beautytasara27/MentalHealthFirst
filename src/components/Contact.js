/* eslint-disable */
import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import './styler.css'
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", message: "" };
      }

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
      
    handleChange = e => this.setState({ [e.target.name]: e.target.value });
  
      
    render() {
        //col-lg-6 col-md-6  col-sm-12 col-xs-12 col-xl-6 "
        const { name, email, message } = this.state;
        return (
            <Jumbotron className="row justify-content-center" style={{ backgroundColor: "white", position: "center", paddingBottom: '200px', paddingTop: "10px" }}>
                <div className=" col-lg-8 col-md-12  col-sm-12 col-xs-12 col-xl-6 " >
                    <p className=" text-center text" style={{ padding: '30px' }}  >You can use this form to contact us about anything or to provide feedback and suggestions.

            If you are looking for support, please post on our our forum instead!</p>

                    <div className="container" style={{ backgroundColor: '#91BB7F', position: "center", zIndex: 1, padding: '60px' }}>
                        <h2 style={{ padding: '20px' }} className="text-center display-4 texty">Contact Us</h2>
                        <form onSubmit={this.handleSubmit} >
                            
                            <div className="  form-group border-bottom  border-dark">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" value={name} onChange={this.handleChange} style={{ background: 'none', border: "none" }} className="form-control" rows="1"/>
                            </div>
                            <div className=" form-group border-bottom border-dark">
                                <label htmlFor="message">Message</label>
                                <input type="text" name="message" value={message} onChange={this.handleChange} style={{ background: 'none', border: "none" }} className="form-control" rows="1"></input>
                            </div>
                            <button type="submit" className="btn btn-green-moon">Submit</button>
                        </form>
                    </div>
                </div>
            </Jumbotron>

        )
    }
}